document.getElementById('am').addEventListener('click', greeting);
function greeting() {
    document.getElementById('greeting').innerHTML = "Good Morning!"
}

document.getElementById('pm').addEventListener('click', greetNight);
function greetNight() {
    document.getElementById('greeting').innerHTML = "Good Evening!"
}

document.getElementById('red').addEventListener('click', redBackground);
function redBackground() {
    document.getElementById('div_color').setAttribute("class", "bg_red");
}
document.getElementById('blue').addEventListener('click', blueBackground);
function blueBackground() {
    document.getElementById('div_color').setAttribute("class", "bg_blue");
}

document.getElementById('yellow').addEventListener('click', yellowBackground);
function yellowBackground() {
    document.getElementById('div_color').setAttribute("class", "bg_yellow");
}

document.getElementById('green').addEventListener('click', greenBackground);
function greenBackground() {
    document.getElementById('div_color').setAttribute("class", "bg_green");
}



/*
Build a list dynamically with javascript
*/
// create variables to hold the list, input and button
const list = document.querySelector('#myUL');
const input = document.querySelector('#usrInput');
const addButton = document.querySelector('#addBtn');

// on button click, read input from the content of the input box
addButton.addEventListener('click', () => {
    //creates a new li element
    var liItem = document.createElement("li");
    //takes user input and sets to the newly created li element
    liItem.setAttribute('id', input.value);
    //appends to list
    liItem.appendChild(document.createTextNode(input.value))
    //display
    list.appendChild(liItem);
    //clears the input box
    input.value = '';
});

