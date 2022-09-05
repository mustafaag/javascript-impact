//1. Shfaqni nje list me qytete brenda nje divi me id 
// "qytetet". elementet e listes do jene span pra
// nga javascripti
// 2. Beni te shtoni nje qytet ne list me ane te nje inputi dhe nje butoni.
const qytetet = ['Durres', 'Vlora', 'Korca', 'Kukes', 'Diber', 'Tepelen'];

window.onload = function () {
    const container = document.getElementById('qytetet');

    for(var i = 0; i < qytetet.length; i++){
        container.appendChild(createCitySpan(qytetet[i]));
    }
}
// krijon nje <span> me emrin e qytetit
function createCitySpan (cityName) {
    const spanEl = document.createElement('span');
    spanEl.innerHTML = cityName;
    
    return spanEl;
}


function addCity () {    
    const cityName = document.getElementById('qyteti').value;
    const container = document.getElementById('qytetet');
    // therrasim funksioni per krijimin e spanit dhe shtimin ne kontainer
    // !true = false
    if(!qytetet.includes(cityName)) {
        container.appendChild(createCitySpan(cityName));
        qytetet.push(cityName);
        showMessage("Qyteti "+ cityName +" u shtua me sukses", true);
    } else { 
        showMessage(cityName +" Ekziston ne listen tone", false);
    }
    
    document.getElementById('qyteti').value = '';
}

// Tregon mesazhin e suksesit ose error
function showMessage(message, isSuccess){
    const messageCont = document.getElementById('message');
    messageCont.innerHTML = message;
    
    if (isSuccess) {
        messageCont.classList.remove('red')
        messageCont.classList.add('green');
    }else {
        messageCont.classList.remove('green')
        messageCont.classList.add('red')
    }
}

// funksion qe kap eventin e shkrimit ne tastier dhe 
// kontrollon nqs eshte enter
function keyUpHandler(e) {
    if(e.code == 'Enter' && e.keyCode == 13){
        addCity();
    }
}