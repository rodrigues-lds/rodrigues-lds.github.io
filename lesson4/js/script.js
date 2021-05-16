const daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthlist = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var d = new Date();
var day = d.getDay() 
var date = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();

var dateStr = daylist[day] + ', ' + date + " " + monthlist[month] + " " + year;
document.getElementById("dates").innerHTML = dateStr;
document.getElementById("copyright").innerHTML = year

function toggleMenu() {
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
