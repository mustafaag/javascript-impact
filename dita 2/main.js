// console.log('hello world');

// Cfare eshte nnje if 
// == kontrollon vetem vleren 
// === kontrollon vleren dhe tipin e variablit

// if (1 === "1") {
//     // do bejme dicka 
//     console.log('jane te barabarte');
// } else {
//     // do bejme dicka tjeter
//     console.log('Nuk jane te barabarte');
// }

const person1 = {
    emri: "Person",
    gjinia: "F",
    mosha: 25 
};

const person2 = {
    emri: "Person2",
    gjinia: "M",
    mosha: 15 
}
// Qe te pish alkol mosha duhet te jete mbi 18 ose e barabarte
// Do afishojme emrin dhe gjinine e personit qe mund te pi. 
const moshaLejuar = 18;
let lejohet = person1.mosha >= moshaLejuar;
// if (lejohet) {
//     alert("Personi me emrin " + person1.emri + 
//     " dhe gjinia " + person1.gjinia + " mund te pi alkol");
//     console.log("Personi me emrin " + person1.emri + 
//     " dhe gjinia " + person1.gjinia + " mund te pi alkol");
// } else {
//     console.log("Personi me emrin " + person1.emri + 
//     " dhe gjinia " + person1.gjinia + " nuk mund te pi alkol");
// }

// lejohet = person2.mosha >= moshaLejuar;

// if (lejohet) {
//     console.log("Personi me emrin " + person2.emri + 
//     " dhe gjinia " + person2.gjinia + " mund te pi alkol");
// } else {
//     console.log("Personi me emrin " + person2.emri + 
//     " dhe gjinia " + person2.gjinia + " nuk mund te pi alkol");
// }

// ciklet (Loops)
// Cikli for perdoret ne rastet kur ne e dim se sa here do perseritet dicka
// i eshte indexi 

// for ( var i=0 ; i < 5; i = i + 2){
//  // i rritet sa here ekzekutohet kodi
//  console.log(i);
// }

// for ( var i=0 ; i < person2.mosha ; i = i + 2){
//     // i rritet sa here ekzekutohet kodi
//     console.log(i);
// }

// Gjejme shumen e numrave cift deri ne nje numer maksimal
const nrMax = 18;
 let shuma = 0; 
for ( var i=0 ; i < nrMax; i = i + 2){
    // i rritet sa here ekzekutohet kodi
    shuma = shuma + i;
}
// console.log("Shuma eshte: ", shuma);

const fruta = ['molle', 'kumbulla', 'fiq'];
let fruti = fruta[1];
let fruti1 = fruta[2];



// for(var i = 0; i < fruta.length; i++) {
//     console.log(fruta[i]);
// }

// ciklin while / do while.
// emri // kushti // 
// let count = 0;
// while (count < 5) {
//     console.log('te pakten 1 here');
//     count++;
// }

// do while ekzekutohet te pakten 1 here
let input = "";
// do {
//     // kryen veprimet
//     input =  prompt("Vendos nje emer ose exit per ta hequr");
// } while(input != "exit");

// kemi nje array me numra te cfaredoshem
// Do afishojme mesataren e arrayt 
// Do afishojme shumen e array. 
const numrat = [1,2,3,5,55,6,8,15,12];
let shumaNumrave = 0;
let mesatare = 0; 

// for (var i = 0; i < numrat.length; i++) {
//     shumaNumrave = shumaNumrave + numrat[i];
// }
// metoda me ciklin while
// shumen e numrave tek
// let index = 0; 
// while(index < numrat.length) {
//     if(numrat[index] % 2 != 0) {
//         shumaNumrave = shumaNumrave + numrat[index]
//     }
    
//     index++;
// }

// console.log("Shuma e numrave ne array eshte: ", shumaNumrave);
// // Mesatarja eshte = shumen e numrave / sasine (gjatesine e array)

// mesatare = shumaNumrave / numrat.length;
// console.log("Mesatarja e numrave ne array eshte: ", mesatare);

// Funksionet 
// Cfare eshte nje funksion 
// Eshte nje pjese kodi i cili kryen nje veprim te caktuar.
// funksion pa parameter
// deklarimi / inicialization
function shfaqNjeNumer () {
    console.log(3);
}
// funksion mund te kete shume ose aspak parametra
// deklarimi / inicialization
function shfaqText(text) {
    console.log(text)
}
// Kthe nje numer
function mbledhja2Nr(nr1, nr2){
    return nr1 + nr2;
}

// perdorimi 
shfaqNjeNumer();
shfaqText("ky eshte nje text");
console.log(mbledhja2Nr(5, 3));

