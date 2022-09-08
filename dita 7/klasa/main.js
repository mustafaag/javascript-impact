console.log('here');


function makeMadLib () {
    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const person = document.getElementById('person').value;

    const fjalia = person + ' ' + adjective + ' ' + noun; 

    document.getElementById('story').innerHTML = fjalia;
}

function nrNeKatror () {
    const nr = document.getElementById('square-input').value;
    const nrKatror = nr*nr;  
    ndryshoVlere(nrKatror);
}

function ndryshoVlere(vlera) {
    document.getElementById('solution').innerHTML = vlera;
}
// if(document.getElementById('square-input')){
//     document.getElementById('square-input').addEventListener('keyup', nrNeKatror);
// }

function pergjysmim(){
    const nr = document.getElementById('half-input').value;
    ndryshoVlere(nr/2);
}

function perqindje () {
    const perc = document.getElementById('percent1-input').value;
    const shuma = document.getElementById('percent2-input').value;
    const tot = (perc/100) * shuma; 
    ndryshoVlere(perc +"% " + " e "+shuma + " eshte " + tot);
}

function siperFaqjaERrethit () {
    // formula e siperfaqes pi=3.14 r*r ne katror
    const radius = document.getElementById('area-input').value;
    const siperfaqja = 3.14 * radius * radius;
    ndryshoVlere("Siperfaqja e rrethit eshte: " +siperfaqja);
}

