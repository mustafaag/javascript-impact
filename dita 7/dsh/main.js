console.log('detyrat e shtepise');
// 1. Beni me javascript ne momentin qe mbajme mausin siper nje div 
// te ndryshoje teksti ne "mousi siper" dhe kur e 
// largojme te ndryshoje "mousi iku"
window.onload = function () {
    const container = document.getElementById('container');
    const content = container.innerHTML;
    container.addEventListener('mouseover', function() {
        container.innerHTML = "Mause siper";
    });

    container.addEventListener('mouseleave', function() { 
        container.innerHTML = content;
    });

    // 2. Beni qe ne momentin qe klikohet nje div 
    // te hapet nje alert qe divi u klikua
    container.addEventListener('click', function () {
        alert('Divi u klikua');
    });
    
    // 3. Ne momentin qe ndryshon nje input, 
    // permbajtjen e inputit tia kaloni nje elementi tjeter
    const inputText = document.getElementById('textInput');
    const paragraf = document.getElementById('paragraf');
    inputText.addEventListener('change', function() {
        paragraf.innerHTML = inputText.value;
    });

    inputText.addEventListener('keyup', function() {
        paragraf.innerHTML = inputText.value;
    });

}



