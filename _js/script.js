/*
  PARALLAX EFFECT INDEX
*/

var translateX = $(window).height() / 2;
var translateY = $(window).width() / 2;

function parallax(e) {
  var x = e.clientX;
  var y = e.clientY;
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();

  var newTranslateX = x - windowWidth / 2;
  var newTranslateY = y - windowHeight / 2;

  translateX = lerp(newTranslateX, translateX, 0.9);
  translateY = lerp(newTranslateY, translateY, 0.9);

  document.getElementById("bg").style.left = (windowWidth / -10) + (translateX * 0.01) + "px";
  document.getElementById("bg").style.top = (windowHeight / -10) + (translateY * 0.01) + "px";

  document.getElementById("dog").style.left = (windowWidth / -10) + (translateX * 0.0125) + "px";
  document.getElementById("dog").style.top = (windowHeight / -10) + (translateY * 0.0125) + "px";

  document.getElementById("text").style.left = (windowWidth / -10) + (translateX * 0.02) + "px";
  document.getElementById("text").style.top = (windowHeight / -10) + (translateY * 0.02) + "px";

  document.getElementById("person").style.left = (windowWidth / -10) + (translateX * 0.025) + "px";
  document.getElementById("person").style.top = (windowHeight / -10) + (translateY * 0.025) + "px";

  document.getElementById("navIndex").style.left = (translateX * 0.01) + "px";
  document.getElementById("navIndex").style.top = (translateY * 0.01) + "px";
}

function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}

/*
  INVISIBLE NAVBAR & Logo Transition
*/

$(document).ready(function(){

    $(window).scroll(function(){

    if($(window).scrollTop()>1){
      $("#navigationbar").css({"background-color" : "rgba(210, 15, 50, 0.9)"});
      $(".logo").css({"padding" : "30px 20px 20px 20px"});

      $(".logo").hover(function(){
        $(".logo").css({"padding" : "50px 20px 20px 20px"});
      }, function(){
        $(".logo").css({"padding" : "30px 20px 20px 20px"});
      }
    );
    }else{
      $("#navigationbar").css({"background-color" : "rgba(210, 15, 50, 0)"});
      $(".logo").css({"padding" : "50px 20px 20px 20px"});

      $(".logo").hover(function(){
        $(".logo").css({"padding" : "30px 20px 20px 20px"});
      }, function(){
        $(".logo").css({"padding" : "50px 20px 20px 20px"});
      }
    );
    }
    });

});

/*
  Parallax-Scrolling
*/

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    $('#slideshow').css({
        'transform' : 'translate(0px, ' + wScroll*0.05 + '%)'
    });
});

/*
  SLIDESHOW
*/
var actualImgNumber = 1;
var imgAmount = 4;

function slideshow() {
  if (actualImgNumber == imgAmount) {
    actualImgNumber = 1;
  }else{
    actualImgNumber++;
  }

  changeImage();

  setTimeout("slideshow()", 5000);
}

function swipeRight(){
  if (actualImgNumber == imgAmount) {
    actualImgNumber = 1;
  }else{
    actualImgNumber++;
  }

  changeImage();
}

function swipeLeft(){
  if (actualImgNumber == 1) {
    actualImgNumber = imgAmount;
  }else{
    actualImgNumber--;
  }

  changeImage();
}

function changeImage(){
  document.getElementById("slideshow").style.background = "url('../images/wallpaper" + actualImgNumber + ".jpg')";
  document.getElementById("slideshow").style.backgroundSize = "cover";
}

/*
  Smooth Scrolling
*/
$(document).ready(function() {
    var headerHeight = $('#navigationbar').outerHeight();

    $('.scrolldown').click(function(e) {
        var linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight + 1
        }, 800);

        e.preventDefault();
    });
});

/*
  WEBSHOP OBJECTS
*/

/*
  Get Objects by Name
*/
/*
var products = [];

function loadProducts(){
  for(i = 0; i < data.products.length; i++){
    products[data.products[i].name.replace(/ /g,'')] =
      new Product(
        data.products[i].name,
        data.products[i].id,
        data.products[i].type,
        data.products[i].price
      );
  }
  displayProducts();
}
*/

/*
  Display Objects
*/

function displayProducts(){
  for (var i = 0; i < data.products.length; i++) {
    if (data.products[i].info.length > 130) {
      var helpInfo = data.products[i].info.substring(0, 130);
    }else{
      var helpInfo = data.products[i].info;
    }

    if (data.products[i].type != "voucher") {
      productList.innerHTML +=  "<div class='product'>" +
                                "<img src='../images/" + data.products[i].name + "_red.jpg' class='previewImage'>" +
                                "<h3>" + data.products[i].name + " #" + data.products[i].id + "</h3>" +
                                "<button class='addToCartButton' onclick='addProductToCart();'><span class='glyphicon glyphicon-plus'></span> Einkaufswagen</button>" +
                                "<p class='price'>" + data.products[i].price + ".00€</p>" +
                                "<p class='info'>" + helpInfo + "...</p>" +

                                "<br><br></div>";
    }else{
      productList.innerHTML +=  "<div class='product'>" +
                                "<img src='../images/" + data.products[i].name + ".jpg' class='previewImage'>" +
                                "<h3>" + data.products[i].name + " #" + data.products[i].id + "</h3>" +
                                "<p class='price'>" + data.products[i].price + ".00€</p>" +
                                "<p class='info'>" + helpInfo + "...</p>" +

                                "<br><br></div>";
    }
  }
}

/*
  ShoppingCart
*/

$(document).scroll(function() {
    var wScroll = $(this).scrollTop();

    if (wScroll >= ($(window).height() + 20)) {
      $(".shoppingCart").css({"position" : "fixed"});
    }else{
      $(".shoppingCart").css({"position" : "relative"});
    }
});

function addProductToCart(){
  console.log("Test");
}
