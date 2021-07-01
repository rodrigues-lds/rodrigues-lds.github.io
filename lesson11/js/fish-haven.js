const townName = "Fish Haven";
const cityID = "5585010";

const unit = "imperial";
const apiKEY = "13742dc64c835fc2abcc75fb482f6836";
const apiSummaryURL = "https://api.openweathermap.org/data/2.5/weather?id=" + cityID + "&units=" + unit + "&APPID=" + apiKEY;
const apiForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&units=" + unit + "&APPID=" + apiKEY;
const townURL = "https://byui-cit230.github.io/weather/data/towndata.json";

/* Summary Weather */
fetch(apiSummaryURL)
  .then((response) => response.json())
  .then((jsObject) => {
            
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

/* Upcoming Events */
fetch(townURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsObject) {    
    
    const town = jsObject.towns.filter((specificTown) => specificTown.name.includes(townName));
    let events = town[0].events;
    
    let upcomingEvents = document.createElement("section");
    let info = document.createElement("div");

    events.forEach(event => {
      let upcomingEvent = document.createElement("p");
      upcomingEvent.textContent = event;
      info.appendChild(upcomingEvent);
      upcomingEvents.appendChild(info);
    });

    document.querySelector("div.upcomingEvents").appendChild(upcomingEvents);

  });