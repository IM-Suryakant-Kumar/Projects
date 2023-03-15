const counterElem = document.querySelector(".counter");
const barElem = document.querySelector(".loading-bar-front");

let idx = 0;

updateNum(idx);

function updateNum() {
   counterElem.innerText = idx + "%";
   barElem.style.width = idx + "%";
   idx++;
   if (idx < 101) {
      setTimeout(updateNum, 20);
   }
}
