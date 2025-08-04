window.onload = displayImage;

var imagesArray = [
    "omg.jpg", 
    "halflifeNYC.png"
];

function displayImage(){
    var num = Math.floor(Math.random() * (imagesArray.length));
    document.getElementById("main_image1").src = "assets/img/Images/" + imagesArray[num];
}
