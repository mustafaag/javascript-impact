console.log('Detyra shtepie loaded');
// 1. Deklaroni 2 variabla me numra te cfaredoshme dhe
// te parin nxirreni ne alert ndersa te dytin ne console.

const nr1 = 5, nr2 = 20;
// alert("Numri i pare ne alert eshte: "+ nr1);
console.log("Numri i dyte ne console: ", nr2);

// 2. Deklaroni nje objekt me te dhena per nje frut.
const fruti = {
    emri: "molla", 
    kaFare: true, 
    shija: "e embel",
    ngjyra: ["e kuqe", "jeshile", "verdhe"]
};
// console.log(fruti);
// console.log(fruti.kaFare);

// 3. Deklaroni nje array me emra qytetesh dhe bejeni log ne console
const qyetet = ["Durres", "TR", "ELB", "SR"];
// console.log(qyetet);
// for( var i = 0; i < qyetet.length; i++){
//     console.log(qyetet[i]);
// }

// 4. Afishoni te gjithe numrat 'tek' ne nje array me numra

const numrat = [1, 5, 6, 100, 8, 10];
// qe nje numer te jete cift % 2 (modali = 0)
// qe nje numer te jete tek % 2 (modali != 0) kur behet modal 2
for (var i = 0; i < numrat.length; i++){
    if(numrat[i] % 2 != 0 ) {
        console.log(numrat[i]);
    }
}

//5. Beni nje html me 2-3 div dhe nxirrini div ne console duke i kapur me ID
window.onload = function () {
    const elementi = document.getElementById('sub-container');
    console.log(elementi);


// 6. Beni nje html me 3 div dhe 2 a dhe nxirrini te 
/// gjithe elementet me nje klase te caktuar ne console
    const redElements = document.getElementsByClassName('red');
    console.log(redElements);
// jepini ngjyren e kuqe ketyre elementeve
    for(var i=0; i < redElements.length; i++){
       redElements[i].style.color = 'red'; 
    }
// 7. Ndryshoni permbajtjen e nje elementi ne html duke perdorur innerHTML
    const paragraf = document.querySelector('p')
    paragraf.innerHTML = "This is a paragraf";
}
