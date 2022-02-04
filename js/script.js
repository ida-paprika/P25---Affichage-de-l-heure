const BTN = document.querySelector('button');
const CONTENT = document.querySelector('#content');

BTN.addEventListener('click', function(){
    setInterval(timeDisplay, 1000);
});

function timeDisplay() {
    const DATE = new Date();
    CONTENT.textContent = DATE.toLocaleTimeString("fr");
    if (DATE.getSeconds() % 3 == 0) {
        CONTENT.style.color = "red";
        CONTENT.style.fontWeight = "bold";
    } else {
        CONTENT.style.color = null;
        CONTENT.style.fontWeight = null;
    }
}