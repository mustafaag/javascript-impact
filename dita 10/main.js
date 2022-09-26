

window.onload = function () {
    const users = JSON.parse(localStorage.getItem('users'));
    sendUsersToTable(users);
}

function sendUsersToTable(users){
    const table = document.getElementById('users');
    for(var i = 0; i< users.length; i++){
        table.appendChild(createRow(i, users[i]));
    }
}

function createRow(index, user) {
    const row = document.createElement('tr'); 
    row.setAttribute('data-first-name', user.firstName);
    row.appendChild(createColumn(index+1))
    row.appendChild(createColumn(user.firstName))
    row.appendChild(createColumn(user.lastName))
    row.appendChild(createColumn(user.age))
    row.appendChild(createColumn(user.gender));
    const action = document.createElement('span');
    action.className = 'delete';
    action.innerHTML = 'Delete';
    action.addEventListener('click', deleteRow);
    row.appendChild(action)
    return row;
}

function createColumn (value) {
    const column = document.createElement('td');
    column.innerHTML = value;
    return column;
}


function deleteRow(e) {
    const table = document.getElementById('users');
    const target = e.currentTarget;
    const parent = target.parentNode;
    const firstsName = parent.getAttribute('data-first-name');
    
    table.removeChild(parent);
    deleteFromLocalStorage(firstsName)
}

function deleteFromLocalStorage(firstsName) {
    console.log(firstsName);
    const users = JSON.parse(localStorage.getItem('users'));
 
    for(var i =0; i< users.length; i++){
        if(users[i].firstName == firstsName){
            users.splice(i, 1);
        }
    }

    sendToLocalStorage(users);

}



function sendToLocalStorage (data) {
    localStorage.removeItem('users');
    localStorage.setItem("users", JSON.stringify(data));
}