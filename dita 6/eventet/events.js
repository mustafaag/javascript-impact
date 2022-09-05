console.log('eventet'); 
// Eventet jane veprime/ngjarje qe ndodhin ne faq
// disa nga eventet mund te jene: 
// - load i faqes
// - para load i faqes
// - mouse click 
// - scroll i mouse
// - shtypja tastieres 
window.onload = function () {
    console.log('faqja u ngarkua');
    // click 
    document.getElementById('clickable').addEventListener('click', function (e){
        document.getElementById('clickable').innerHTML ='u klikua';
    })
    // mouse hover
    document.getElementById('clickable').addEventListener('mouseover', function (){
        document.getElementById('clickable').style.background = 'yellow';
    }); 
    // MOUSE LEAVE
    document.getElementById('clickable').addEventListener('mouseleave', function (){
        document.getElementById('clickable').style.background = 'red';
    }); 
    // Document scroll
    document.addEventListener ('scroll', function() {
        document.getElementById('clickable3').style.background = 'darkgreen';
    });

    //Shtypja e tastieres 
    document.getElementById('inputValue').addEventListener('keypress', function(e) {
        document.getElementById('texti').innerHTML = document.getElementById('texti').innerHTML + e.key;
        console.log(e);
    });

    // on change
    document.getElementById('inputValue').addEventListener('change', function(e) {
       console.log(e.currentTarget.value);
        const vlera = e.currentTarget.value; 
        document.getElementById('texti').innerHTML = vlera;
    });

}

window.onbeforeunload = function () {
    console.log('before unload');
    alert('faqja po clodohet'); 
}

