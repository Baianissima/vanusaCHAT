// Page 08_02_setInterval

// coucou();

let varImg = 0;
console.log(typeof varImg, varImg); // initialisation de la variable pour l'image

// let timer commenté pour arreté d'apparaitre en permanence sur la console :

let timer = window.setInterval('monDiaporama()', 1000); //initialisation du timer avec setInterval('nomdelafonction(), temps en miliseconde)
// console.log(typeof timer, timer);

// let getAttrImg = document.getElementById('imgDiapo1').getAttribute('src');
// console.log(typeof getAttrImg, getAttrImg);

function monDiaporama() {
    varImg +=1;  // On incrémente et on affecte le 1

    // Je confère, je défini et je mets en place et j'appelle les images par leurs noms automatiquement :

    imgDiapo1.setAttribute('src', 'img/' + varImg + '.jpg');
    // console.log('la varImg = ' + varImg);

    if(varImg == 6) {
        // clearInterval permet de stopper le timer dès que la variable est égale à 6
        clearInterval(timer);
    }
}
