/* const myHeading = document.querySelector("h1");
myHeading.textContent = "Olá mundo!";

let iceCream = "chocolate";
if (iceCream === "chocolate") {
    alert("Sim, eu amo sorvete de chocolate!");
} else {
    alert("Aaaah, mas chocolate é o meu favorito…");
}

let myVariable = document.querySelector("h1");
alert("olá!");
 */

// Código para alteração da imagem

let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'img/firefox-icon.png') {
        myImage.setAttribute('src', 'img/firefox.png');
    } else if (mySrc === 'img/firefox.png') {
        myImage.setAttribute('src', 'img/firefox2.png');
    } else {
        myImage.setAttribute('src', 'img/firefox-icon.png');
    }
}

// Código Mensagem de boas vindas personalizada

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Por favor digite seu nome.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla é legal, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla é leagl, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}