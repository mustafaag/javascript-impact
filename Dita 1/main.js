var temp;
let temp1;
const temp2 = "test";
// Rregullat e emrit te variablave: 
// - nuk fillon me numer
// mund te filloj me shkronje, _ ose $ 
// Emri i variablit duhet te jete pershkrues se cfar permban
// nje list me emra - nameArray
// nje klase css si konstante classCont 
// zakonisht perdoret metoda camel case 
// Konstantet zakonisht shkruhen me tmdhaja 



// alert("variabli u ndryshua");

// Karakteristike e variablave ne javascript
let nr1 = 1;
nr1 = '1';
// console.log(nr1);

// Disa llojesh (vlerash)
let nr2 = 1;
let strVar = "this is a text";
let isBool = true; // true ose false
const objVar = { 
    emri: "Mustafa",
    mosha: "disa vjec"
}
let arrayVar = [1,2,3,4,5]; 

// console.log(objVar);
// console.log(arrayVar[2]);

/// Nderto nje objekt me te dhenat tuaja dhe beni alert vetem emrin

const une = { 
    emri: "Mustafa",
    mosha: "disa vjec",
    ngjyraSyve: "kafe"
};

// alert(une.emri);
// operatoret 
// Mbledhjen e 2 numrave dhe do e tregojme ate me alert. 
const sh1 = 5, 
      sh2 = 11, 
      sh3 = 65;

const shuma = sh1 + sh2;
// console.log(shuma);
const zbritja = sh2 - sh1;
const shumezimi = sh2 * sh1;
const pjestimi = sh2 / sh1;
const modal = sh2 % sh1;

// console.log(zbritja);
// console.log(shumezimi);
// console.log(pjestimi);
// console.log(modal);
console.log(temp);

// Gjej nese nje numer esht cift apo tek. 
temp = 8;
temp1 = 2;
nr1 = 5;

if (temp % 2 != 0) {
    console.log("Nr " + temp +" eshte nje numer cift");
} else {
    console.log("Nr " + temp +" eshte nje numer tek");
}

if (temp1 % 2 != 0) {
    console.log("Nr " + temp1 +" eshte nje numer cift");
} else {
    console.log("Nr " + temp1 +" eshte nje numer tek");
}

if (nr1 % 2 != 0) {
    console.log("Nr " + nr1 +" eshte nje numer cift");
} else {
    console.log("Nr " + nr1 +" eshte nje numer tek");
}

// operatoret kushtor 
// ==  
// != 
// <= 
// >=

// deklaroni 2 var, do gjeni nqs jane plotepjestues me 3; 
// dhe do e afishoni ne console 
// 5, 18
let number1 = 5, number2 = 18;

if (number1 % 3 == 0) {
    console.log("Nr " + number1 +" eshte plotpjestues i 3");
} else {
    console.log("Nr " + number1 +" nuk eshte plotpjestues i 3");
}

if (number2 % 3 == 0) {
    console.log("Nr " + number2 +" eshte plotpjestues i 3");
} else {
    console.log("Nr " + number2 +" nuk eshte plotpjestues i 3");
}