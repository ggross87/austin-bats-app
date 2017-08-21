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
