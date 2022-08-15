// Detyra shtepie
// 1. Deklaroni 2 variabla me tekste te cfaredoshme 
// dhe te parin nxirreni ne alert ndersa te dytin ne console. 

const emri = 'Mustafa';
const shkolla = 'FSHN - Fakulteti i shkencave te natyres';

// Nxirre ne alert
alert(emri);
// Console 
console.log(shkolla);

// 2. Deklaroni nje objekt me te dhena per nje kafshe te cfaredoshme.
const kafsh = { 
    emri: "Lesi",
    lloji: "Qen",
    mosha: 5
}

console.log(kafsh);

// Deklaroni 3 variabla me vlere 3, 6, 9
// dhe percaktoni nqs jane apo jo plotepjestues te njeri-tjetrit
// 1 nr eshte plotepjestues kur mbetja nga pjestimi eshte 0; 

let nr1 = 3, nr2 = 6, nr3 = 9;
console.log(nr3 % nr2);
if(nr3 % nr2 == 0){
    console.log(nr2 + ' eshte plotpjestues me ' + nr3);
} else {
    console.log(nr2 + ' nuk eshte plotpjestues me ' + nr3);
}
if(nr2 % nr1 == 0){
    console.log(nr1 + ' eshte plotpjestues me ' + nr2);
} else {
    console.log(nr1 + ' nuk eshte plotpjestues me ' + nr2);
}

// 4. Deklaroni 1 list me emra qytetesh dhe afishoni cdo emer ne console

const qytetet = ['Durresi', 'Shkodra', 'Tirana', 'Korca', 'Fieri'];
// const qytetiPare = qytetet[0];
// const qytetiFundit = qytetet[4];
// console.log(qytetiPare, qytetiFundit)
for (var i = 0; i < qytetet.length; i++) {
    console.log(qytetet[i]); // i merr vlere 0,1,2... qytetet.length
}

// 5. Afishoni te gjithe numrat tek ne nje array me numra

const numrat = [1, 5, 6, 100, 8, 10];

for (var i = 0; i < numrat.length; i++){
    console.log(numrat[i]);
}