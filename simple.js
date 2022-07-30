const txt = document.querySelector('.text-1');

let text = [...txt.textContent];

let i = 0;

let text1 = text.map(function (e) {
    i++;
    return `<span class = sp${i}>${e}</span>`;
}).join('');

txt.innerHTML = text1;
let dura = 900;

let delayAwal = 0;
for (let index = 0; index < text.length; index++) {
    let i = 1 + index;
    let sp = document.querySelector(`.sp${i}`);
    sp.style.animation = `animasi ${dura}ms ${delayAwal}ms`;
    delayAwal += (dura / 2);
    setTimeout(() => {
        sp.style.animation = ``;
        console.log(sp);
    }, (dura * text.length) / 1.8);
    console.log(sp);
}

setInterval(function () {
    let delay = 0;
    for (let index = 0; index < text.length; index++) {
        let i = 1 + index;
        let sp = document.querySelector(`.sp${i}`);
        sp.style.animation = `animasi ${dura}ms ${delay}ms`;
        delay += (dura / 2);
        setTimeout(() => {
            sp.style.animation = ``;
            console.log(sp);
        }, (dura * text.length) / 1.8);
        console.log(sp);
    }
}, (dura * text.length) / 1.7);