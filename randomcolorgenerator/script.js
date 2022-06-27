let currentColour = document.querySelector('.current-colour');
let bodyElem = document.querySelector('body');
let generateBtn = document.querySelector('.generate-btn');

bodyElem.style.backgroundColor = currentColour.innerText;

generateBtn.addEventListener('click', () => {
    let randomColor = "";
    let characters = "0123456789abcdef";

    /*
    The for loop is very useful in javascript syntax:
    for(initializer,condition,increment) {
        code
    }
    */

    for (let i = 0; i < 6; i++) {
        randomColor = randomColor + characters[Math.floor(Math.random() * 16)];
    }

    currentColour.innerText = '#' + randomColor;
    bodyElem.style.backgroundColor = '#' + randomColor;
}) 