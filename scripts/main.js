const assests = {
    accessoriesOption: [{name: 'earings' , src: './assests/accessories/earings.png'},
                        {name: 'flower' , src: './assests/accessories/flower.png'},
                        {name: 'glasses', src: './assests/accessories/glasses.png'},
                        {name: 'headphone', src: './assests/accessories/headphone.png'}
                    ],
    backgroundOption: [{name: 'blue', src: './assests/backgrounds/blue70.png'},
                        {name: 'green', src: './assests/backgrounds/green70.png'},
                        {name: 'grey', src: './assests/backgrounds/grey80.png'},
                        {name: 'red', src: './assests/backgrounds/red70.png'},
                        {name: 'yellow', src: './assests/backgrounds/yellow70.png'}
                    ],
    earsOption: [{name: 'default', src: './assests/ears/default.png'},
                {name: 'tilt-backward', src: './assests/ears/tilt-backward.png'}, 
                {name: 'tilt-foward', src: './assests/ears/tilt-forward.png'}
                ],
    eyesOption: [{name: 'angry' , src: './assests/eyes/angry.png'}, 
                {name: 'default', src: './assests/eyes/default.png'} ,
                {name: 'naughty', src: './assests/eyes/naughty.png'}, 
                {name: 'panda', src: './assests/eyes/panda.png'}, 
                {name: 'smart', src: './assests/eyes/smart.png'}, 
                {name: 'start', src: './assests/eyes/star.png'}],
    hairOption: [   {name: 'bang', src: './assests/hair/bang.png' }, 
                    {name: 'curls', src: './assests/hair/curls.png'}, 
                    {name: 'default', src: './assests/hair/default.png'}, 
                    {name: 'elegant', src: './assests/hair/elegant.png'}, 
                    {name: 'fancy', src: './assests/hair/fancy.png'}, 
                    {name: 'quiff', src: './assests/hair/quiff.png'}, 
                    {name: 'short', src: './assests/hair/short.png'}
                ], 
    legOption: [{name: 'bubble-tea', src: './assests/leg/bubble-tea.png'}, 
                {name: 'cookie', src: './assests/leg/cookie.png'}, 
                {name: 'default', src: './assests/leg/default.png'}, 
                {name: 'game-console', src: './assests/leg/game-console.png'}, 
                {name: 'tilt-backward', src: './assests/leg/tilt-backward.png'}, 
                {name: 'tilt-forward', src: './assests/leg/tilt-forward.png'}],
    mouthOption: [  {name: 'astonished', src: './assests/mouth/astonished.png'}, 
                    {name: 'default', src: './assests/mouth/default.png'}, 
                    {name: 'eating', src: './assests/mouth/eating.png'}, 
                    {name: 'laugh', src: './assests/mouth/laugh.png'}, 
                    {name: 'tongue', src: './assests/mouth/tongue.png'}],
    neckOption: [   {name: 'bend-backward', src: './assests/neck/bend-backward.png'}, 
                    {name: 'bend-forward', src: './assests/neck/bend-forward.png'}, 
                    {name: 'default', src: './assests/neck/default.png'}, 
                    {name: 'thick', src: './assests/neck/thick.png'}],
}

const imgElement = [
    new Image(), //background 
    new Image(), //ears 
    new Image(), //neck
    new Image(), //nose
    new Image(), //mouth
    new Image(), //hair 
    new Image(), //eyes
    new Image(), //leg
    new Image(), //accessories
]

let imgUrls = [
    './assests/backgrounds/blue70.png', 
    './assests/ears/default.png',
    './assests/neck/default.png',
    './assests/nose.png',
    './assests/mouth/default.png',
    './assests/hair/default.png',
    './assests/eyes/default.png',
    './assests/leg/default.png',
    './assests/accessories/headphone.png'
]; 
const loadImages = () => {
    
    imgElement.forEach((image, index) => {
        image.src = imgUrls[index]; 
    });
    
    const canvas = document.getElementById("canvas");  
    const ctx = canvas.getContext("2d"); 
    canvas.width = 300; 
    canvas.height = 400; 

    let loadedImage = 1; 
    imgElement.forEach((image) => {
        image.onload = () =>{
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height); 
            loadedImage++; 
        }
        if(loadedImage == imgElement.length){
            const link = document.createElement("a"); 
            link.download = "alpaca-image.png";
            link.href = canvas.toDataURL(); 
            link.click(); 
        }
        image.onerror = () =>{
            console.error("image failed to laod", image.src); 
        }
    });
}

function generateOptions(){
    const customizeOption = document.querySelector(".customize_option");

    customizeOption.addEventListener("click", (e) => {
        const currDataPosition = e.target.getAttribute("data-position");

        e.stopPropagation(); 
        e.preventDefault(); 
        const optionSelected = e.target.id;
        const optionDisplay = document.getElementById("option_display"); 
        const optionDisplayAll = document.querySelectorAll("#option_display > *");
        const btn = document.querySelectorAll(".customize_option > *");

        for(const curr of btn){
            curr.ariaCurrent = "false"; 
        }

        if(e.target.ariaCurrent === "false"){

            for(const btn of optionDisplayAll){
                btn.parentNode.removeChild(btn); 
            }
            
            const fragment = document.createDocumentFragment();  
            assests[`${optionSelected}`].forEach((currOption) => {
                const btnElement = document.createElement("button");
                btnElement.addEventListener("click", (e) => {
                    imgUrls[Number(currDataPosition)] = `${currOption.src}`;
                    loadImages(); 
                });
                btnElement.appendChild(document.createTextNode(currOption.name)); 
                fragment.appendChild(btnElement); 
            });
            
            e.target.ariaCurrent = "true"; 
            optionDisplay.appendChild(fragment);
        }
    });
    
}

loadImages(); 
generateOptions(); 



