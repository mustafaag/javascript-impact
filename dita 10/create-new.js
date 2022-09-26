console.log('create-new.js');


function storeUser(e) {
    e.preventDefault();
    const name = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('genderSelect').value;
    if(checkUsername(name)) {
        const alert = document.getElementById('errorMessage');
        alert.innerHTML = 'Uzer ekziston';
        alert.classList.remove('d-none');
        return;
    }
    const usersArray = [];
    const user = {
        firstName: name,
        lastName: lname,
        age: age,
        gender: gender
    }
    usersArray.push(user);
    
    const users = localStorage.getItem('users');
    if(users == undefined || users == ""){
        sendToLocalStorage([user])
    } else {
        const storedUsers = JSON.parse(localStorage.getItem("users"))
        storedUsers.push(user);
        sendToLocalStorage(storedUsers)
    } 

    window.location.href = './index.html';

}

function sendToLocalStorage (data) {
    localStorage.removeItem('users');
    localStorage.setItem("users", JSON.stringify(data));
}


function checkUsername(firstName) {
    const storedUsers = JSON.parse(localStorage.getItem("users"));

    for(var i= 0; i< storedUsers.length; i++) {
        if(storedUsers[i].firstName == firstName){
            return true;
        }
    }

    return false;
}