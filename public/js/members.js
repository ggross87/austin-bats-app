
$(document).ready(function() {
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });
});

var temp2;
var fah;
var cloudy;
var windSpeed;
var sunsetTime;
var visibility;
var key = 'cdaff73a26ba20e03fbd4c2f9f18e75e';
var url = 'https://api.darksky.net/forecast/' + key + '/';
var cb = '/?callback=?';

function getLocation() {
  navigator.geolocation.getCurrentPosition(function(data) {
    getWeather(data.coords.latitude, data.coords.longitude);
  });

}
function getWeather(lat, long) {
  $.getJSON(url + lat + ',' + long + cb)
  .then(function(data) {
    // cloudy = data.daily.data[0].cloudCover.toFixed();
    visibility = data.daily.data[0].visibility.toFixed();
    windSpeed = data.currently.windSpeed.toFixed();
    fah = data.currently.temperature.toFixed();
    sunsetTime = data.daily.data[0].sunsetTime.toFixed();
    $("#todayInfo").html("Current Temperature: " + data.currently.temperature.toFixed());
    $("#todayInfo2").html("The Sun sets at: " + data.daily.data[0].sunsetTime.toFixed());
    $("#todayInfo3").html("Wind Speeds expected to reach: " + data.currently.windSpeed.toFixed());
    $("#todayInfo4").html("Current visibility level is: " + data.daily.data[0].visibility.toFixed());
    $("#tomorrowInfo").html("Current Temperature: " + data.currently.temperature.toFixed());
    $("#tomorrowInfo2").html("The Sun sets at: " + data.daily.data[0].sunsetTime.toFixed());
    $("#tomorrowInfo3").html("Wind Speeds expected to reach: " + data.currently.windSpeed.toFixed());
    $("#tomorrowInfo4").html("Current visibility level is: " + data.daily.data[0].visibility.toFixed());
    $("#twoDayInfo").html("Current Temperature: " + data.currently.temperature.toFixed());
    $("#twoDayInfo2").html("The Sun sets at: " + data.daily.data[0].sunsetTime.toFixed());
    $("#twoDayInfo3").html("Wind Speeds expected to reach: " + data.currently.windSpeed.toFixed());
    $("#twoDayInfo4").html("Current visibility level is: " + data.daily.data[0].visibility.toFixed());
  });
}
getLocation();
