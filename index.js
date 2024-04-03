var RN = Math.random();
var RN = Math.random()*6;
var RN = Math.floor(RN) + 1;


var pick = "./images/Naruto" + RN + ".png"

// this part unclear a bit 
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", pick);

var RN1 = Math.random();
var RN1 = Math.random()*6;
var RN1 = Math.floor(RN1) + 1;
var pick = "./images/Naruto" + RN1 + ".png"
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", pick);

if(RN > RN1){
    document.querySelector("h1").innerHTML="🚩Player 1 WIN! "
}
else if(RN < RN1){
    document.querySelector("h1").innerHTML="Player 2 WIN! 🚩 "
}
else{
    document.querySelector("h1").innerHTML="🚩 DRAWS! 🚩"
}
