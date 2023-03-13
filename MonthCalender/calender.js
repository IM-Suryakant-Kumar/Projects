const monthElem = document.querySelector(".date h1");
const fullDateElem = document.querySelector(".date p");
const daysCont = document.querySelector(".days");

const dateObj = new Date();
const monthIdx = dateObj.getMonth();
const currentDate = dateObj.getDate();
const lastDate = new Date(dateObj.getFullYear(), monthIdx + 1, 0).getDate();
const firstDay = new Date(dateObj.getFullYear(), monthIdx, 1).getDay();

const monthArr = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December",
];
monthElem.innerText = monthArr[monthIdx];
fullDateElem.innerText = dateObj.toDateString();

let emptyDivLen = firstDay - 1;
while (emptyDivLen != 0) {
   let div = document.createElement("div");
   div.setAttribute("class", "empty");
   daysCont.appendChild(div);
   emptyDivLen--;
}
for (let i = 1; i <= lastDate; i++) {
   let div = document.createElement("div");
   if(i === currentDate) div.setAttribute("class", "today");
   div.innerText = i;
   daysCont.appendChild(div);  
}
