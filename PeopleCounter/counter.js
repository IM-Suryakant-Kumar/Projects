const counterElem = document.getElementById("counter-elem");
const saveElem = document.getElementById("save-elem");

let c = 0;

function increment() {
  counterElem.textContent = ++c;
}

function save() {
    saveElem.textContent += c + " - ";
    setStorage(saveElem.textContent);
    counterElem.textContent = 0;
}

// Clear the data
function cr() {
    let data = "";
    localStorage.setItem("Data", data);
    c = 0;
    saveElem.textContent = "Previous Entries:"  + data;
}

function setStorage(data) {
    localStorage.setItem("Data", data);
}

function getStorage() {
    let data = localStorage.getItem("Data");
    saveElem.innerText = !data  ? "Previous Entries: " : data;
}

getStorage();