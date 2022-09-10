function myMove (){
    console.log("myMove");
    const cont = document.getElementById("container");
    const contWidth = cont.offsetWidth;
    console.log(contWidth);
    var elem = document.getElementById("animate");
    const elemWidth = elem.offsetWidth;
    var posVertikal = 0;
    var posHorizontal = 0;
    var id = setInterval(frame, 10);
    function frame(){
        if (posHorizontal == (contWidth - elemWidth)){
            clearInterval(id);
            topToBottom();
            // eKunderta();
        } else {
            // posVertikal++;
            posHorizontal++;
            // elem.style.top = posVertikal + 'px';
            elem.style.left = posHorizontal + 'px';
        }
    }
}

function eKunderta (){
    const elem = document.getElementById("animate")

    const id = setInterval(frame, 20);
    let posHorizontal = elem.style.left.replace("px", "");

    function frame() {
        if (posHorizontal == 0){
            clearInterval(id);
        }else {
            posHorizontal--;
            elem.style.left = posHorizontal + 'px';
        }
    }
}

function topToBottom () {
    const elem = document.getElementById("animate");
    const cont = document.getElementById("container");
    const contHeight = cont.offsetHeight;
    const elementHeight = elem.offsetHeight;
    const id = setInterval(frame, 20);
    let posVertikal = 0;
    function frame() { 
        if (posVertikal == (contHeight - elementHeight)){
            clearInterval(id);
        }else {
            posVertikal++;
            elem.style.top = posVertikal + 'px';
        }

    }
}