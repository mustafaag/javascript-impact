function increaseSize () {
    const contWidth = document.getElementById('container').offsetWidth;
    let animateWidth = document.getElementById('animate').offsetWidth;

    const id = setInterval(frame, 1);
    var style = window.getComputedStyle(document.getElementById('animate'), null).getPropertyValue('font-size');
    var fontSize = parseFloat(style); 
    function frame () {
        if(contWidth == animateWidth){ 
            clearInterval(id);
            decreaseSize();
        }else {
            animateWidth ++; 
            fontSize += 0.5;
            document.getElementById('animate').style.width = animateWidth + 'px';
            document.getElementById('animate').style.height = animateWidth + 'px';
            document.getElementById('animate').style.fontSize = fontSize + 'px';
        }
    }
}

function decreaseSize () {
    const contWidth = document.getElementById('container').offsetWidth;
    let animateWidth = document.getElementById('animate').offsetWidth;
    var style = window.getComputedStyle(document.getElementById('animate'), null).getPropertyValue('font-size');
    var fontSize = parseFloat(style); 
    const id = setInterval(frame, 1);

    function frame () {
        if(contWidth - animateWidth == 350){ 
            clearInterval (id);
        }else {
            animateWidth --; 
            fontSize -= 0.5;
            document.getElementById('animate').style.width = animateWidth + 'px';
            document.getElementById('animate').style.height = animateWidth + 'px';
            document.getElementById('animate').style.fontSize = fontSize + 'px';
        }
    }
}

/// Marrja e te dhenave nga nje API 
// API?  Eshte nje menyre komunikimi midis sistemeve (url=> kthen te dhena) 