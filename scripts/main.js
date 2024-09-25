const canvas = document.getElementById("canvas");

function createImages(){
    const images = [
        new Image, 
        new Image, 
        new Image, 
        new Image,
        new Image,
        new Image,
        new Image,
        new Image,
        new Image
    ];

    images[0].src = "./assests/accessories/flower.png";
    images[1].src = "./assests/backgrounds/blue50.png"
}

createImages(); 

function defaultAvatar(){

}

function loadImages(){
    canvas.width = 400; 
    canvas.height = 300; 

}