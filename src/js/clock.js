const clock = document.querySelector("body .clock");
console.log(clock);

function tick() {
    const now = new Date();
    const year = now.getFullYear();
    const mon = String(now.getMonth()).padStart(2, '0');
    const day = String(now.getDay()).padStart(2, '0');
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');

    clock.innerText = `${year}-${mon}-${day} ${hh}:${mm}:${ss}`;
}
tick();
setInterval(tick, 1000);