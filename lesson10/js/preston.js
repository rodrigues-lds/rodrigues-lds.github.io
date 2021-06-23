const cityID = "5604473";  // Preston
const unit = "imperial";
const apiKEY = "13742dc64c835fc2abcc75fb482f6836";
const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=" + cityID + "&units=" + unit + "&APPID=" + apiKEY;

/* Weather API Test */
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('current-temp').textContent = jsObject.main.temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });

  /* Summary Weather */
  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);    
        
    document.getElementById('currently').textContent = jsObject.weather[0].description;;
    document.getElementById('high').textContent = Math.round(jsObject.main.temp_max);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windspeed').textContent = Math.round(jsObject.wind.speed);
});