
// $(document).ready(function() {
//   // This file just does a GET request to figure out which user is logged in
//   // and updates the HTML on the page
//   $.get("/api/user_data").then(function(data) {
//     $("#mainHeaderText").text(data.email);
//   });
// });


//Functions creat item cards from the database
// productId, productName, productPrice, productUrl, productDescription

function itemInformation(productId, productName, productPrice, productUrl, productDescription) {
  return $("<button>").attr({
    "data-item-id": productId,
    "data-item-name": productName,
    "data-item-price": productPrice,
    "data-item-custom2-name": "Size",
    "data-item-custom2-options" : "Small|Medium|Large",
    "data-item-url": productUrl,
    "data-item-description": productDescription
  }).html("Buy").addClass("snipcart-add-item");

}

function createProductCard(productPrice, productName, productDescription) {
  return $("<div>").addClass("card-content").append($("<h5>").html(productName),$("<h6>").html(productPrice),$("<p>").html(productDescription));
}

function renderCard (productId, productName, productPrice, productUrl, productDescription){
  return $("<div>").addClass("col s6 m3").append($("<div>").addClass("card medium z-depth-5 hoverable shopItems").append(
    $("<div>").addClass("card-image").append(
      $("<img>").addClass("shopImage").attr("src", "images/shirt.jpg")
    ),
    createProductCard("$"+ productPrice, productName, productDescription),
    $("<div>").addClass("card-action").append(itemInformation(productId, productName, productPrice, productUrl, productDescription))
  ));
}

$("#target").append(renderCard('12','Josh Shirt', '15.99', 'fake.com', 'its a shirt, buy it you dummy'));
$("#target").append(renderCard('12','Bat Shirt', '15.99', 'fake.com', 'its a shirt, buy it you dummy'));
$("#target").append(renderCard('12','Bat Shirt', '15.99', 'fake.com', 'its a shirt, buy it you dummy'));
$("#target").append(renderCard('12','Bat Shirt', '15.99', 'fake.com', 'its a shirt, buy it you dummy'));
$("#target").append(renderCard('12','Bat Shirt', '15.99', 'fake.com', 'its a shirt, buy it you dummy'));

//ajax call to the database to pull iteminformation

// $.ajax({url: '/whereever', method: 'get'}).done(function(data) {
//   data.map(function(eachOne) {
//     var productId = eachOne.productId;
//     var productName = eachOne.productName;
//     var productPrice = eachOne.productPrice;
//     var productUrl = eachOne.productUrl;
//     var productDescription = eachOne.productDescription;
//     $("#target").append(renderCard(productId, productName, productPrice, productUrl, productDescription));
//   });
// });


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

