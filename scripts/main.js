const assests = {
    accessories: [{name: 'earings' , src: './assests/accessories/earings.png'},
                        {name: 'flower' , src: './assests/accessories/flower.png'},
                        {name: 'glasses', src: './assests/accessories/glasses.png'},
                        {name: 'headphone', src: './assests/accessories/headphone.png'}
                    ],
    background: [{name: 'blue', src: './assest/backgrounds/blue70.png'},
                        {name: 'green', src: './assest/backgrounds/green70.png'},
                        {name: 'grey', src: './assest/backgrounds/grey80.png'},
                        {name: 'red', src: './assest/backgrounds/red70.png'},
                        {name: 'yellow', src: './assest/backgrounds/yellow70.png'}
                    ],
    ears: [{name: 'default', src: './assests/ears/default.png'},
                {name: 'tilt-backward', src: './assests/ears/tilt-backward.png'}, 
                {name: 'tilt-foward', src: './assests/ears/tilt-forward.png'}
                ],
    eyes: [{name: 'angry' , src: './assests/eyes/angry.png'}, 
                {name: 'default', src: './assests/eyes/default.png'} ,
                {name: 'naughty', src: './assests/eyes/naughty.png'}, 
                {name: 'panda', src: './assests/eyes/panda.png'}, 
                {name: 'smart', src: './assests/eyes/smart.png'}, 
                {name: 'start', src: './assests/eyes/start.png'}],
    hair: [   {name: 'bang', src: './assests/hair/bang.png' }, 
                    {name: 'curls', src: './assests/hair/curls.png'}, 
                    {name: 'default', src: './assests/hair/default.png'}, 
                    {name: 'elegant', src: './assests/hair/elegant.png'}, 
                    {name: 'fancy', src: './assests/hair/fancy.png'}, 
                    {name: 'quiff', src: './assests/hair/quiff.png'}, 
                    {name: 'short', src: './assests/hair/short.png'}
                ], 
    leg: [{name: 'bubble-tea', src: './assests/leg/bubble-tea.png'}, 
                {name: 'cookie', src: './assests/leg/cookie.png'}, 
                {name: 'default', src: './assests/leg/default.png'}, 
                {name: 'game-console', src: './assests/leg/game-console.png'}, 
                {name: 'tilt-backward', src: './assests/leg/tilt-backward.png'}, 
                {name: 'tilt-forward', src: './assests/leg/tilt-forward.png'}],
    mouth: [  {name: 'astonished', src: './assests/mouth/astonished.png'}, 
                    {name: 'default', src: './assests/mouth/default.png'}, 
                    {name: 'eating', src: './assests/mouth/eating.png'}, 
                    {name: 'laugh', src: './assests/mouth/laugh.png'}, 
                    {name: 'tongue', src: './assests/mouth/tongue.png'}],
    neck: [   {name: 'bend-backward', src: './assests/neck/bend-backward.png'}, 
                    {name: 'bend-forward', src: './assests/neck/bend-forward.png'}, 
                    {name: 'default', src: './assests/neck/default.png'}, 
                    {name: 'thick', src: './assests/neck/thick.png'}],
    nose: [{name: 'default', src: './assests/nose.png'}]
}

const imgElement = [
    new Image(),
    new Image(), 
    new Image(), 
    new Image(), 
    new Image(), 
    new Image(), 
    new Image(), 
    new Image(), 
    new Image()
];

function createImgElement(){
    
    const imgAlt = ["backgrounds", "ears", "neck", "nose", "mouth", "hair", "eyes", "leg", "accessories"]; 
    
    const imgContainer = document.querySelector(".img_container"); 
    const fragment = new DocumentFragment(); 
    
    imgElement.forEach((img, index) => {
        const path = './assests'; 
        switch(imgAlt[index]){
            case "backgrounds":
                img.src = `${path}/${imgAlt[index]}/blue70.png`;
                break;
            case "nose":
                img.src = `${path}/nose.png`;
                break; 
            case "accessories":
                img.src = `${path}/${imgAlt[index]}/headphone.png`;
                break;
            default:
                img.src = `${path}/${imgAlt[index]}/default.png`; 
        }
        img.alt = `${imgAlt[index]}`; 
        fragment.appendChild(img); 
    });
    
    imgContainer.appendChild(fragment); 

    loadImages();
}    

createImgElement(); 


function loadImages(){
    canvas.width = 400; 
    canvas.height = 300; 

    imgElement.forEach((img) => {
        img.onload = () => {
            const canvas = document.getElementById("canvas"); 
            const ctx = canvas.getContext("2d"); 
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height); 
        }
    });
}



