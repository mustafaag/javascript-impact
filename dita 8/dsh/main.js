console.log('detyra shtepie');
// 1. Shto nje anchor element "a" ne nje faqe html qe te ben
//  redirekt ne nje url Ne momentin qe klikohet bej qe faqja mos te shkoje te ajo url
function stopRedirect(e) {
    e.preventDefault();
    console.log("Stop redirect");
}

// 2. Shto nje div ne nje html dhe bej nje funksion qe numeron sa here divi eshte klikuar
let count = 0;
function countClick() {
    count++;
    document.getElementById("result").innerHTML = count;
}

document.getElementById("count-click").addEventListener("click", countClick);

// 3. Shto nje div dhe ne momentin qe behet load faqja ne kete div te shfaqet ora dhe data
window.onload = getCurrentDate;

function getCurrentDate () {
    const date = new Date();
    const dateOnly = date.toLocaleDateString('it-IT');
    const time = date.toLocaleTimeString();
    document.getElementById("data").innerHTML = dateOnly + " " + time;
}

setInterval(getCurrentDate, 1000);