console.log('main')

function findAge() {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {        
        if(this.status == 200) {            
            const resp = JSON.parse(this.responseText);
       
            if(resp.age != null) {
                document.getElementById("rezultati").innerHTML = 
            "Mosha e gjeneruar eshte: " + resp.age;
            } else {
                document.getElementById("rezultati").innerHTML = 
                "Emri nuk eshte i sakte";
            }            
        }
    }
    const name = document.getElementById('name').value;
    xhttp.open("GET", "https://api.agify.io/?name="+name);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
  }