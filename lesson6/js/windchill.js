const high = document.getElementById('high').innerHTML;
const windspeed = document.getElementById('windspeed').innerHTML;

let windchill = 35.74 + (0.6215 * high) - (35.75 * Math.pow(windspeed, 0.16)) + ((0.4275 * high) * Math.pow(windspeed, 0.16));
  if (high <= 50 && windspeed > 3.0) {
     windchill = Math.round(windchill) + " °F";
  } else {
     windchill = "N/A";
  }

  document.getElementById('windchill').innerHTML = windchill;