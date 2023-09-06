
//grab variables
var revealSecret = $('.secretBtn');
var body = $('body');
var title = $('h1');
var itemOne = $('.lineOne');
var bookOne = itemOne.text();
var itemTwo = $('.lineTwo');
var bookTwo = itemTwo.text();
var itemThree = $('.lineThree');
var bookThree = itemThree.text();
var itemFour = $('.lineFour');
var bookFour = itemFour.text();
var itemFive = $('.lineFive');
var bookFive = itemFive.text();
var itemSix = $('.lineSix');
var bookSix = itemSix.text();
var view = $('img');
//event listener
revealSecret.on("click", openSecretRoom);

//event handler
function openSecretRoom(){
  if (revealSecret.text() === "Look behind the bookshelf"){
    //change heading
    title.text("Spell Room");
    title.css("background-color","#e79198");

    //change paragraph text
    itemOne.text("Book of Spells");
    itemTwo.text("Crystal Ball");
    itemThree.text("Unicorn Horn Powder");
    itemFour.text("Dragon Pearls");
    itemFive.text("Magical Herbs");
    itemSix.text("Fireplace and Cauldron");
  
    //button
    revealSecret.text("Return to bookshelf");
    revealSecret.css("background-color","#e79198");
  
    //change body
    body.css("background-color","indigo");
    body.css("color","white");
    body.css("border-color","#e79198");

    //img
    document.getElementById("bookshelf").src = "https://images.pexels.com/photos/7978061/pexels-photo-7978061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  } else {
    //change heading
    title.text("Carmen's Bookshelf");
    title.css("background-color","black");

    //change paragraph text
    itemOne.text(bookOne);
    itemTwo.text(bookTwo);
    itemThree.text(bookThree);
    itemFour.text(bookFour);
    itemFive.text(bookFive);
    itemSix.text(bookSix);
  
    //button
    revealSecret.text("Look behind the bookshelf");
    revealSecret.css("background-color","black");
  
    //change body
    body.css("background-color","antiquewhite");
    body.css("color","black");
    body.css("border-color","black");

    //change img
    document.getElementById("bookshelf").src = "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress";
  }
  
}