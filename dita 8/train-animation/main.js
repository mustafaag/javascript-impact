train.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      train.style.left = timePassed / 5 + 'px';
      if(checkBegining (timePassed / 5)) {
        start = Date.now();
      }
      if (timePassed > 10000) clearInterval(timer);

    }, 20);
  }

  function checkBegining (timePassed) {
    const contWidth = document.getElementById("container").offsetWidth;
    if(timePassed > contWidth) {
      train.style.left = "0px";
      timePassed = 0;
      return true;
    }

    return false;
  }