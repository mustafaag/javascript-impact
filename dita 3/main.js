// Funksionet
// Eshte nje pjese kodi qe kryen nje veprim/ zgjidh nje problem te caktuar

function mblidh2nr(nr1, nr2) {
    return nr1 + nr2; 
}

function afishoNeConsole(text) {
    console.log("Afishimi i kerkuar eshte: ", text)
}

// afishoNeConsole('Ky eshte teksti qe do afishohet');
// afishoNeConsole(mblidh2nr(5, 10));

// kodi mbrapa nuk ekzekutohet nqs kemi gabim ne faqen e js.
// const subContainer = document.getElementById('main');
// console.log(subContainer);
window.onload = function (){
    // kap elementet me ane te ID document.getElementById('sub-main')
    const subContainer = document.getElementById('sub-main');
    subContainer.innerHTML = "Hello Albania";
    // document.getElementsByTagName(tag) -> kap elementet me ane te tagut
    const divs = document.getElementsByTagName('div');
    // document.getElementsByClassName(emrin e klases) -> kap elementet me ane te klases
    const redElement = document.getElementsByClassName('red');
    // document.querySelector(selector) 
    // selector -> id #sub-main
    // selector -> tag div
    // selector -> class .red
    // document.querySelector('#sub-main'); -> kthen elementin e pare
    // document.querySelectorAll(selector); -> kthen nje array 
    console.log( document.querySelector('a'));
    console.log( document.querySelectorAll('a'));
    
}
