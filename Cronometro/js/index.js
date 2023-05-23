const minutesEL = document.querySelector("#minutes")
const secondsEL = document.querySelector("#seconds")
const millesecondsEL = document.querySelector("#miliseconds")
const btnIniciar = document.querySelector("#btnIniciar")
const btnPausa = document.querySelector("#btnPausar")
const btnContinua = document.querySelector("#btnContinuar")
const btnReset = document.querySelector("#btnReset")

let interval;
let minutes = 0;
let seconds = 0;
let milleseconds = 0;
let Pausa = false;

btnIniciar.addEventListener("click", startTimer)
btnPausa.addEventListener("click", pausaTimer)
btnContinua.addEventListener('click', continuaTimer)
btnReset.addEventListener("click", restTimer)

function startTimer() {

    interval = setInterval(() => {

        if (!Pausa) {
            milleseconds += 10

            if (milleseconds === 1000) {
                seconds++;
                milleseconds = 0;
            }
            if (seconds === 60) {
                minutes++;
                seconds = 0
            }
            minutesEL.textContent = fomaTempo(minutes)
            millesecondsEL.textContent = fomatMile(milleseconds)
            secondsEL.textContent = fomaTempo(seconds)

        }

    }, 10)

    btnIniciar.style.display = "none"
    btnPausa.style.display = "block"
}

function pausaTimer() {
    Pausa = true;
    btnPausa.style.display = "none"
    btnContinua.style.display = "block"
}

function continuaTimer() {
    Pausa = false;
    btnPausa.style.display = "block"
    btnContinua.style.display = "none"
}

function restTimer() {

    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milleseconds = 0;

    minutesEL.textContent = "00"
    secondsEL.textContent = "00"
    millesecondsEL.textContent = "000"

    btnReset.style.display = "block"
    btnIniciar.style.display = "block"
    btnPausa.style.display = "none"
    btnContinua.style.display = "none"

}


function fomaTempo(time) {
    return time < 10 ? `0${time}` : time;
}

function fomatMile(time) {
    return time < 100 ? `0${time}` : time;
}


