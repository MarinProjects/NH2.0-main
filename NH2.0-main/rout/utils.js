// Calculate adjusted pension and betrRente
// Calculate adjusted pension
function calculateAdjustedPension(pension, steigungssatzPct) {
    return pension * (1 + steigungssatzPct / 100);
  }
  
module.exports = { calculateAdjustedPension };