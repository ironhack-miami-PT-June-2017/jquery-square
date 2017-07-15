$(document).ready(function(){

  //iteration 1
//
// $(".small-button").on("click", function(){
//   $(".square").removeClass("bigger");
//   $(".square").addClass("smaller");
// });
//
//
// $(".large-button").on("click", function(){
//   $(".square").removeClass("smaller");
//   $(".square").addClass("bigger");
// });

// end iteration 1








//iteration 2


//pro method
// extract the ctual current widtch from the HTML
// var htmlCurrentWidth = parseInt($(".square").height())gh;
//
// //harcoded version since I happen to know the actual values
// var currentWidth = 200;
// var currentHeight = 200;
//
// $(".small-button").on("click", function(){
//    currentHeight-= 10;
//   currentWidth -= 10;
//
//   $(".square").css("width", currentWidth+"px");
//   $(".square").css("height", currentHeight+"px");
// });
//
//
// $(".large-button").on("click", function(){
//    currentHeight+= 10;
//   currentWidth += 10;
//
//   $(".square").css("width", currentWidth+"px");
//   $(".square").css("height", currentHeight+"px");
// });

// end iteration 2



// iteration 3

var Square = function(height, width){
  this.height = height;
  this.width = width;
}

Square.prototype.giveAbilityToMakeBigger = function(){
  var that = this;
  $(".large-button").on("click", function(){
     that.height+= 10;
    that.width += 10;

    $(".square").css("width", that.width+"px");
    $(".square").css("height", that.height+"px");
  });
}

Square.prototype.giveAbilityToMakeSmaller = function(){
  var that = this;
  $(".small-button").on("click", function(){
     that.height-= 10;
     that.width -= 10;

    $(".square").css("width", that.width+"px");
    $(".square").css("height", that.height+"px");
  });
}


var mySquare = new Square();
mySquare.giveAbilityToMakeSmaller();
mySquare.giveAbilityToMakeBigger();


var squareWidth = $(".square").width();
var squareHeight = $(".square").height();
var blah = new Square(squareHeight, squareWidth);
// end iteration 3







});
