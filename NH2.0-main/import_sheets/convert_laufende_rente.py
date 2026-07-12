import csv
import json
import shlex
import sys
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Optional, Union

EXPECTED_FIELDS_WITHOUT_BOOL = 24
EXPECTED_FIELDS_WITH_BOOL = 25


def read_text_file(file_path: Path) -> str:
    encodings = ("utf-8-sig", "utf-8", "cp1252", "latin-1")

    for encoding in encodings:
        try:
            return file_path.read_text(encoding=encoding)
        except UnicodeDecodeError:
            continue

    raise ValueError(
        "Die Datei konnte mit keinem unterstützten Zeichensatz gelesen werden."
    )


def unwrap_excel_csv_line(line: str) -> str:
    stripped = line.strip()

    if len(stripped) >= 2 and stripped.startswith('"') and stripped.endswith('"'):
        try:
            parsed = next(csv.reader([stripped]))
            if len(parsed) == 1:
                return parsed[0]
        except csv.Error:
            pass

    return stripped


def split_line(line: str) -> List[str]:
    normalized = unwrap_excel_csv_line(line)

    try:
        return shlex.split(normalized, posix=True)
    except ValueError as exc:
        raise ValueError(
            "Die Zeile konnte nicht zerlegt werden: {0}".format(exc)
        )


def parse_date(value: str) -> Optional[str]:
    value = str(value or "").strip()

    if not value:
        return None

    formats = ("%d/%m/%Y", "%d.%m.%Y", "%Y-%m-%d")

    for fmt in formats:
        try:
            return datetime.strptime(value, fmt).strftime("%Y-%m-%d")
        except ValueError:
            pass

    raise ValueError("Ungültiges Datum: {0}".format(value))


def parse_number(value: str) -> Union[int, float]:
    value = str(value or "").strip()

    if value == "":
        return 0

    value = value.replace("€", "").replace("%", "").replace(" ", "")

    if "," in value and "." in value:
        value = value.replace(".", "").replace(",", ".")
    elif "," in value:
        value = value.replace(",", ".")

    try:
        number = float(value)
    except ValueError:
        raise ValueError("Ungültiger Zahlenwert: {0}".format(value))

    if number.is_integer():
        return int(number)

    return number


def parse_integer(value: str) -> int:
    return int(parse_number(value))


def parse_text(value: str) -> Optional[str]:
    value = str(value or "").strip()
    return value if value != "" else None


def parse_string_preserve_zero(value: str) -> Optional[str]:
    value = str(value or "").strip()
    return value if value != "" else None


def convert_tokens_to_record(tokens: List[str], line_number: int) -> Dict[str, Any]:
    # Alte Dateien können am Ende noch "no" enthalten.
    # Dieses 25. Feld wird bewusst ignoriert.
    if len(tokens) == EXPECTED_FIELDS_WITH_BOOL:
        tokens = tokens[:EXPECTED_FIELDS_WITHOUT_BOOL]

    if len(tokens) != EXPECTED_FIELDS_WITHOUT_BOOL:
        raise ValueError(
            "Zeile {0}: {1} Werte gefunden, erwartet werden 24 "
            "(oder 25 mit altem trailing 'no'). Erkannte Werte: {2}".format(
                line_number, len(tokens), tokens
            )
        )

    return {
        "personalnummer": parse_integer(tokens[0]),
        "datenBzglDerLaufendenRente": {
            "gueltigVon": parse_date(tokens[1]),
            "gueltigBis": None,
            "eingabedatum": parse_date(tokens[2]),
            "gesamtversorgung": parse_number(tokens[3]),
            "gesetzlicheSVRente": parse_number(tokens[4]),
            "renteAusBefrLebensvers": parse_number(tokens[5]),
            "andereAnzurechnendeRente": parse_number(tokens[6]),
            "andereAnzurechnendeRenteName": parse_text(tokens[7]),
            "zusatzrente": parse_number(tokens[8]),
            "zusatzrenteName": parse_text(tokens[9]),
            "pension": parse_number(tokens[10]),
            "ausgleich": parse_number(tokens[11]),
            "betrRente": parse_number(tokens[12]),
            "bezugsart": parse_integer(tokens[13]),
            "anpassungsschluessel": parse_integer(tokens[14]),
            "weitereRenteUnterPersNr": parse_integer(tokens[15]),
            "anzahlKinder": parse_integer(tokens[16]),
            "steuerklasse": parse_string_preserve_zero(tokens[17]),
            "krankenkassenkennziffer": parse_string_preserve_zero(tokens[18]),
            "beitragFuerKrankenvers": parse_number(tokens[19]),
            "entgeltpunkte": parse_number(tokens[20]),
            "zugangsfaktor": parse_number(tokens[21]),
            "rentenartfaktor": parse_number(tokens[22]),
            "teilrentenfaktor": parse_number(tokens[23]),
        },
    }


def js_value(value: Any) -> str:
    if value is None:
        return "null"

    if isinstance(value, bool):
        return "true" if value else "false"

    if isinstance(value, str):
        return json.dumps(value, ensure_ascii=False)

    return str(value)


def date_to_js(value: Optional[str]) -> str:
    if value is None:
        return "null"

    return 'new Date("{0}")'.format(value)


def record_to_javascript(record: Dict[str, Any]) -> str:
    data = record["datenBzglDerLaufendenRente"]

    return """  {{
    personalnummer: {personalnummer},
    datenBzglDerLaufendenRente: {{
      gueltigVon: {gueltigVon},
      gueltigBis: {gueltigBis},
      eingabedatum: {eingabedatum},
      gesamtversorgung: {gesamtversorgung},
      andereAnzurechnendeRente: {andereAnzurechnendeRente},
      andereAnzurechnendeRenteName: {andereAnzurechnendeRenteName},
      gesetzlicheSVRente: {gesetzlicheSVRente},
      renteAusBefrLebensvers: {renteAusBefrLebensvers},
      zusatzrente: {zusatzrente},
      zusatzrenteName: {zusatzrenteName},
      pension: {pension},
      ausgleich: {ausgleich},
      betrRente: {betrRente},
      bezugsart: {bezugsart},
      weitereRenteUnterPersNr: {weitereRenteUnterPersNr},
      anzahlKinder: {anzahlKinder},
      entgeltpunkte: {entgeltpunkte},
      steuerklasse: {steuerklasse},
      zugangsfaktor: {zugangsfaktor},
      krankenkassenkennziffer: {krankenkassenkennziffer},
      beitragFuerKrankenvers: {beitragFuerKrankenvers},
      rentenartfaktor: {rentenartfaktor},
      teilrentenfaktor: {teilrentenfaktor},
      anpassungsschluessel: {anpassungsschluessel}
    }}
  }}""".format(
        personalnummer=record["personalnummer"],
        gueltigVon=date_to_js(data["gueltigVon"]),
        gueltigBis=date_to_js(data["gueltigBis"]),
        eingabedatum=date_to_js(data["eingabedatum"]),
        gesamtversorgung=js_value(data["gesamtversorgung"]),
        andereAnzurechnendeRente=js_value(data["andereAnzurechnendeRente"]),
        andereAnzurechnendeRenteName=js_value(data["andereAnzurechnendeRenteName"]),
        gesetzlicheSVRente=js_value(data["gesetzlicheSVRente"]),
        renteAusBefrLebensvers=js_value(data["renteAusBefrLebensvers"]),
        zusatzrente=js_value(data["zusatzrente"]),
        zusatzrenteName=js_value(data["zusatzrenteName"]),
        pension=js_value(data["pension"]),
        ausgleich=js_value(data["ausgleich"]),
        betrRente=js_value(data["betrRente"]),
        bezugsart=js_value(data["bezugsart"]),
        weitereRenteUnterPersNr=js_value(data["weitereRenteUnterPersNr"]),
        anzahlKinder=js_value(data["anzahlKinder"]),
        entgeltpunkte=js_value(data["entgeltpunkte"]),
        steuerklasse=js_value(data["steuerklasse"]),
        zugangsfaktor=js_value(data["zugangsfaktor"]),
        krankenkassenkennziffer=js_value(data["krankenkassenkennziffer"]),
        beitragFuerKrankenvers=js_value(data["beitragFuerKrankenvers"]),
        rentenartfaktor=js_value(data["rentenartfaktor"]),
        teilrentenfaktor=js_value(data["teilrentenfaktor"]),
        anpassungsschluessel=js_value(data["anpassungsschluessel"]),
    )


def create_javascript_import(records: List[Dict[str, Any]]) -> str:
    javascript_records = ",\n\n".join(
        record_to_javascript(record) for record in records
    )

    js_template = """const axios = require("axios");

const API_BASE_URL = "http://localhost:4000/api";

const datenBzglDerLaufendenRenteImport = [

__RECORDS__

];

function toDateKey(value) {
  if (!value) return null;

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return null;

  return date.toISOString().slice(0, 10);
}

async function importDatenBzglDerLaufendenRente() {
  const missingPersonalnummern = [];
  const importedPersonalnummern = [];
  const duplicatePersonalnummern = [];
  const failedPersonalnummern = [];

  try {
    console.log("Lade vorhandene Personen aus der Datenbank ...");

    const personsResponse = await axios.get(`${API_BASE_URL}/person`);

    const persons = Array.isArray(personsResponse.data)
      ? personsResponse.data
      : [];

    const personByPersonalnummer = new Map();

    persons.forEach((person) => {
      const personalnummer = Number(person.personalnummer);

      if (Number.isFinite(personalnummer)) {
        personByPersonalnummer.set(personalnummer, person);
      }
    });

    console.log(`${persons.length} vorhandene Personen geladen.`);

    for (const importEntry of datenBzglDerLaufendenRenteImport) {
      const personalnummer = Number(importEntry.personalnummer);
      const person = personByPersonalnummer.get(personalnummer);

      if (!person) {
        missingPersonalnummern.push(personalnummer);
        console.warn(
          `Personalnummer ${personalnummer} existiert nicht - übersprungen.`
        );
        continue;
      }

      const newData = importEntry.datenBzglDerLaufendenRente;
      const newPeriodKey = toDateKey(newData.gueltigVon);

      const existingPeriods = person.datenbzglderlaufendenRente || [];

      const periodAlreadyExists = existingPeriods.some((period) => {
        return toDateKey(period.gueltigVon) === newPeriodKey;
      });

      if (periodAlreadyExists) {
        duplicatePersonalnummern.push(personalnummer);
        console.warn(
          `Personalnummer ${personalnummer}: Periode ${newPeriodKey} ` +
          `existiert bereits - übersprungen.`
        );
        continue;
      }

      try {
        await axios.post(
          `${API_BASE_URL}/person/${person._id}/datenbzglderlaufendenrente`,
          newData
        );

        importedPersonalnummern.push(personalnummer);
        console.log(`Personalnummer ${personalnummer} importiert.`);
      } catch (error) {
        failedPersonalnummern.push(personalnummer);

        if (error.response) {
          console.error(
            `Personalnummer ${personalnummer}: HTTP ${error.response.status}`,
            error.response.data
          );
        } else {
          console.error(
            `Personalnummer ${personalnummer}:`,
            error.message
          );
        }
      }
    }

    console.log("");
    console.log("================================");
    console.log("IMPORT ABGESCHLOSSEN");
    console.log("================================");
    console.log(`Importiert: ${importedPersonalnummern.length}`);
    console.log(`Nicht vorhanden: ${missingPersonalnummern.length}`);
    console.log(`Periode bereits vorhanden: ${duplicatePersonalnummern.length}`);
    console.log(`Fehlgeschlagen: ${failedPersonalnummern.length}`);

    if (missingPersonalnummern.length > 0) {
      console.log("");
      console.log("Nicht vorhandene Personalnummern:");
      console.log(missingPersonalnummern.join(", "));
    }

    if (duplicatePersonalnummern.length > 0) {
      console.log("");
      console.log("Bereits vorhandene Perioden:");
      console.log(duplicatePersonalnummern.join(", "));
    }

    if (failedPersonalnummern.length > 0) {
      console.log("");
      console.log("Fehlgeschlagene Personalnummern:");
      console.log(failedPersonalnummern.join(", "));
    }
  } catch (error) {
    if (error.response) {
      console.error(
        `Personen konnten nicht geladen werden. HTTP ${error.response.status}`,
        error.response.data
      );
    } else {
      console.error("Server nicht erreichbar:", error.message);
    }
  }
}

importDatenBzglDerLaufendenRente();
"""

    return js_template.replace("__RECORDS__", javascript_records)


def convert_file(input_path: Path, output_path: Path) -> None:
    text = read_text_file(input_path)

    records = []
    errors = []

    for line_number, raw_line in enumerate(text.splitlines(), start=1):
        if not raw_line.strip():
            continue

        try:
            tokens = split_line(raw_line)
            record = convert_tokens_to_record(tokens, line_number)
            records.append(record)
        except Exception as exc:
            errors.append("Zeile {0}: {1}".format(line_number, exc))

    if errors:
        print("")
        print("Fehler beim Verarbeiten:")

        for error in errors:
            print(error)

        print("")
        print(
            "Es wurde keine JavaScript-Datei erzeugt, "
            "damit keine fehlerhaften Datensätze importiert werden."
        )
        sys.exit(1)

    javascript = create_javascript_import(records)

    output_path.write_text(javascript, encoding="utf-8")

    print("")
    print("Konvertierung erfolgreich.")
    print("Verarbeitete Datensätze: {0}".format(len(records)))
    print("Erzeugte Datei: {0}".format(output_path.resolve()))


def main() -> None:
    if len(sys.argv) < 2:
        print(
            "Verwendung:\n"
            "python convert_laufende_rente.py "
            "<Eingabedatei.csv> [Ausgabedatei.js]"
        )
        sys.exit(1)

    input_path = Path(sys.argv[1])

    if not input_path.exists():
        print("Die Eingabedatei existiert nicht: {0}".format(input_path))
        sys.exit(1)

    if len(sys.argv) >= 3:
        output_path = Path(sys.argv[2])
    else:
        output_path = input_path.parent / "Datenimport_laufenderente.js"

    convert_file(input_path, output_path)


if __name__ == "__main__":
    main()
