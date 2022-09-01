console.log('u inicializua klasa');
// metoda per shtim elementesh
// metoda per krijim elementesh
// metoda per fshirje elementesh

window.onload = function () {
    // const newElement = document.createElement('div');
    // newElement.innerHTML = 'hello world';

    // const container = document.getElementById('container'); 
    // container.appendChild(newElement);
    // const newElementP = document.createElement('p');
    // newElementP.innerHTML = 'ky eshte nje paragraf';
    // const childs = container.childNodes;
    // container.replaceChild(newElementP, childs[1]);
    // console.log(childs);
    // document.getElementById('container').replaceChild(newElement, newElementP);
    // console.log(newElementP);
    const listEl = document.getElementById('nxenesit');
    const nxenesit = [{
            emri: 'Filan fisteku',
            mosha: 15,
            mesatarja: 5.5
        }, 
        {
            emri: 'Filan fisteku 2',
            mosha: 12,
            mesatarja: 4.9
        }, 
        {
            emri: 'Filan fisteku 3',
            mosha: 20,
            mesatarja: 10
        }, 
        {
            emri: 'Filan fisteku 4',
            mosha: 14,
            mesatarja: 6
        }, 
        {
            emri: 'Filan fisteku 5',
            mosha: 16,
            mesatarja: 9
        }];
    
    for(var i = 0; i< nxenesit.length; i++){
        const ul = document.createElement('ul'); 
        const nameEl = document.createElement('span'); 
        const ageEl = document.createElement('span'); 
        const avgEl = document.createElement('span'); 
        const deleteEl = document.createElement('span');
        
        deleteEl.innerHTML = 'Delete';
        deleteEl.classList.add('red');
        deleteEl.addEventListener('click', deleteElement);

        nameEl.classList.add('li-name');
        ageEl.classList.add('li-age');
        avgEl.classList.add('li-avg');
        nameEl.innerHTML = nxenesit[i].emri;
        ageEl.innerHTML = nxenesit[i].mosha;
        avgEl.innerHTML = nxenesit[i].mesatarja;

        ul.appendChild(nameEl);
        ul.appendChild(ageEl);
        ul.appendChild(avgEl);
        ul.appendChild(deleteEl);


        listEl.append(ul);
    }
}

function addOnList(){
    const listEl = document.getElementById('nxenesit');
    const ul = document.createElement('ul'); 
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const avg = document.getElementById('avg').value;

    const nameEl = document.createElement('span'); 
    const ageEl = document.createElement('span'); 
    const avgEl = document.createElement('span'); 
    const deleteEl = document.createElement('span');

    deleteEl.innerHTML = 'Delete';
    deleteEl.classList.add('red');
    deleteEl.addEventListener('click', deleteElement);

    nameEl.innerHTML = name;
    ageEl.innerHTML = age;
    avgEl.innerHTML = avg;

    ul.appendChild(nameEl);
    ul.appendChild(ageEl);
    ul.appendChild(avgEl);
    ul.appendChild(deleteEl);

    listEl.append(ul)

}

function deleteElement(e) { 
    const listEl = document.getElementById('nxenesit');
    const target = e.currentTarget; 
    const parentTarget = target.parentNode;
    listEl.removeChild(parentTarget);
}