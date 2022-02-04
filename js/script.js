const BTN = document.querySelector('button');
const CONTENT = document.querySelector('#content');
const CLOCK = document.querySelector('#clock');

setInterval(timeDisplay, 1000);

BTN.addEventListener('click', function(){
    CONTENT.textContent = "Hello World";
});

function timeDisplay() {
    const DATE = new Date();
    CLOCK.innerHTML = DATE.toLocaleTimeString("fr");
    if (DATE.getSeconds() % 3 == 0) {
        CLOCK.classList.add("text-danger", "fw-bold");
    } else {
        CLOCK.classList.remove("text-danger", "fw-bold");
    }
}