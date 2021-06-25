const cityID = "5604473";  // Preston
const unit = "imperial";
const apiKEY = "13742dc64c835fc2abcc75fb482f6836";
const apiSummaryURL = "http://api.openweathermap.org/data/2.5/weather?id=" + cityID + "&units=" + unit + "&APPID=" + apiKEY;
const apiForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&units=" + unit + "&APPID=" + apiKEY;

/* Weather API Test */
fetch(apiSummaryURL)
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
fetch(apiSummaryURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);    
        
    document.getElementById('currently').textContent = jsObject.weather[0].description;;
    document.getElementById('high').textContent = Math.round(jsObject.main.temp_max);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windspeed').textContent = Math.round(jsObject.wind.speed);
});

/* 5 Days Forecast*/
fetch(apiForecastURL)
    .then(response => response.json())
    .then((jsObject) => {
               
        // Credits:
        // How to filter data from JSon source:
        // https://stackoverflow.com/questions/23720988/how-to-filter-json-data-in-javascript-or-jquery
        const timeFilter = "18:00:00";
        const forecast = jsObject.list.filter((specificTime) => specificTime.dt_txt.includes(timeFilter));
  	    
        let day = 1;
	      
        forecast.forEach(forecast => {	  
          document.getElementById('temp' + (day)).textContent = Math.round(forecast.main.temp) + " °F";
          document.getElementById('img' + (day)).src = "https://openweathermap.org/img/wn/" + forecast.weather[0].icon + "@2x.png";
          document.getElementById('img' + (day)).alt = forecast.weather[0].description;	 

          // Credits:
          // How to extract day of the week source:
          // https://stackoverflow.com/questions/17964170/get-the-weekday-from-a-date-object-or-date-string-using-javascript/17964373
          // https://www.w3schools.com/js/js_switch.asp 
          let dayOfWeek = "";
          switch(new Date(forecast.dt_txt).getDay()){
            case 0:
              dayOfWeek = "Sun";
              break;
            case 1:
              dayOfWeek = "Mon";
              break;
            case 2:
              dayOfWeek = "Tue";
              break;
            case 3:
              dayOfWeek = "Wed";
              break;
            case 4:
              dayOfWeek = "Thu";
              break;
            case 5:
              dayOfWeek = "Fri";
              break;
            case 6:
              dayOfWeek = "Sat";
              break; 
            default:
              dayOfWeek = "Error";
              break;     
          }

          document.getElementById('day' + (day)).textContent = dayOfWeek;
	        day++;	  
	});
});
