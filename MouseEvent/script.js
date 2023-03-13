const containerElem = document.querySelector(".container");


window.addEventListener("mousemove", (e) => {
   let x = e.clientX;
   let y = e.clientY;

   containerElem.innerHTML = `
    <div class="mouse-event">
    ${x}
    <h4>Mouse X Position(px)</h4>
    </div>
    <div class="mouse-event">
        ${y}
        <h4>Mouse Y Position(px)</h4>
    </div>
    `;
});
