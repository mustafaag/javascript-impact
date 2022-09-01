console.log('u inicializua');

window.onload = function () {
    //1. Ndrysho permbajtjen e nje div ne "Ky eshte nje text" me ane te JavaScript
    document.querySelector('#per-tu-ndryshuar').innerHTML = 
    '<span><i>Ky texti  eshte brenda html </i></span>';
   document.querySelector('#per-tu-ndryshuar').innerText = 
   'interpretohet vetem si text';
   // 2. Divit te mesiperm vendsini nje id= "black" dhe vendosi 
   // nje background te zi dhe textin color: white
    const blackDiv = document.getElementById('black');
    blackDiv.style.backgroundColor = 'black';
    blackDiv.style.color = 'white';
}