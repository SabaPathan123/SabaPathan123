const text = ['Websites','Web Apps'];

const flipText = document.getElementById("flipX");

// flipText.textContent = text[Math.floor(Math.random() *2)];
//console.log(flipText.textContent);
const intervalID = setInterval(doFlip, 1000);

function doFlip(){
    flipText.textContent = text[0? 1:0];
    //console.log(flipText.textContent); 
}

