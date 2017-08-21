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
    "data-item-custom2-options" : "Small|Medium|Large | Xl",
    "data-item-url": productUrl,
    "data-item-description": "Item Description: " + productDescription
  }).html("Buy").addClass("snipcart-add-item");

}

function createProductCard(productPrice, productName, productDescription) {
  return $("<div>").addClass("card-content").append($("<h6>").html(productName),$("<p>").html("Price: " + productPrice),$("<p>").html("Description: " + productDescription));
}

function renderCard (productId, productName, productPrice, productUrl, productDescription){
  return $("<div>").addClass("col s6 m3").append($("<div>").addClass("card medium z-depth-5 hoverable shopItems").append(
    $("<div>").addClass("card-image").append(
      $("<img>").addClass("shopImage").attr("src", productUrl)
    ),
    createProductCard("$"+ productPrice, productName, productDescription, productUrl),
    $("<div>").addClass("card-action").append(itemInformation(productId, productName, productPrice, productUrl, productDescription))
  ));
}

$("#target").append(renderCard('1','Bat ATX Logo Shirt', '15.99', 'https://d1yg28hrivmbqm.cloudfront.net/files/f18/f183380cdb508d64068063a3d2434704_preview.png', 'its a shirt, buy it you dummy'));
$("#target").append(renderCard('2','Love Bats Shirt', '15.99', 'https://d1yg28hrivmbqm.cloudfront.net/files/d89/d8949b51a42e63c87e93c1b99d394da7_preview.png', 'its a shirt, buy it you dummy'));
$("#target").append(renderCard('3','Guano Shirt', '15.99', 'https://d1yg28hrivmbqm.cloudfront.net/files/2bb/2bbb2c4f36d74d860c0d9a625905b8f2_preview.png', 'its a shirt, buy it you dummy'));
$("#target").append(renderCard('4','Skyline Shirt', '15.99', 'https://d1yg28hrivmbqm.cloudfront.net/files/3c4/3c4bf120f0983df15b1570b313800425_preview.png', 'its a shirt, buy it you dummy'));

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
