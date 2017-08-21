
$(document).ready(function() {
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });
});

// var temp2;
// var fah;
// var cloudy;
// var windSpeed;
// var sunsetTime;
// var visibility;
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

    console.log(data);
    $("#todayInfo").html("Current Temperature: " + data.currently.temperature.toFixed());
    $("#todayInfo2").html("The Sun sets at: " + data.daily.data[0].sunsetTime.toFixed());
    $("#todayInfo3").html("Wind Speeds expected to reach: " + data.currently.windSpeed.toFixed());
    $("#todayInfo4").html("Current visibility level is: " + data.daily.data[0].visibility.toFixed());

    $("#tomorrowInfo").html("Current Temperature: " + data.daily.data[1].temperatureMax.toFixed());
    $("#tomorrowInfo2").html("The Sun sets at: " + data.daily.data[1].sunsetTime.toFixed());
    $("#tomorrowInfo3").html("Wind Speeds expected to reach: " + data.daily.data[1].windSpeed.toFixed());
    $("#tomorrowInfo4").html("Current visibility level is: " + data.daily.data[1].visibility.toFixed());

    $("#twoDayInfo").html("Current Temperature: " + data.daily.data[2].temperatureMax.toFixed());
    $("#twoDayInfo2").html("The Sun sets at: " + data.daily.data[2].sunsetTime.toFixed());
    $("#twoDayInfo3").html("Wind Speeds expected to reach: " + data.daily.data[2].windSpeed.toFixed());
    $("#twoDayInfo4").html("Current visibility level is: " + data.daily.data[2].visibility.toFixed());
  });
}
getLocation();
