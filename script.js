const html = document.querySelector('html');
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const bannerImg = document.querySelector('.app__image');
const title = document.querySelector('.app__title');
const allBtns = document.querySelectorAll('.app__card-button');
const musicInput = document.getElementById('alternar-musica');
const playBtn = document.getElementById('start-pause');
const startOrPauseTbn = document.querySelector('#start-pause span');
const startOrPauseIcon = document.querySelector('.app__card-primary-butto-icon');
const timeOnScreen = document.getElementById('timer');


const music = new Audio('sons/luna-rise-part-one.mp3');
const beep = new Audio('sons/beep.mp3');
const pause = new Audio('sons/pause.mp3');
const play = new Audio('sons/play.wav');


let counter = 1500;
let interval = null;
music.loop = true;

musicInput.addEventListener('change', () => {
    if (music.paused) {
        music.play();
    } else if (music.play) {
        music.pause();
    }
    else {
        music.paused;
    }
})

focoBtn.addEventListener('click', () => {
    counter = 1500;
    changedContext('foco')
    focoBtn.classList.add('active');
});

curtoBtn.addEventListener('click', () => {
    counter = 300;
    changedContext('descanso-curto')
    curtoBtn.classList.add('active')
})

longoBtn.addEventListener('click', () => {
    counter = 900;
    changedContext('descanso-longo')
    longoBtn.classList.add('active')
})



function changedContext(context) {
    showTime();
    allBtns.forEach(function (context) {
        context.classList.remove('active')
    })

    html.setAttribute('data-contexto', context)
    bannerImg.setAttribute('src', `/imagens/${context}.png`)
    switch (context) {
        case 'foco':
            title.innerHTML = `  Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;

        case 'descanso-curto':
            title.innerHTML = ` Que tal dar uma respirada,<br>
            <strong class="app__title-strong">Faça uma pausa curta</strong>`
            break;

        case 'descanso-longo':
            title.innerHTML = ` Hora de voltar à superfície,<br>
            <strong class="app__title-strong">Faça uma pausa longa</strong>`
            break;

        default:
            break;
    }
}


const regressiveCounter = () => {
    if(counter <=0){
       // beep.play();
        alert("Finalizado");
        zerar();
        return;
    }
    counter -= 1;
    showTime();
}
playBtn.addEventListener('click', timer)

function timer() {
    if(interval){
        pause.play();
        zerar();
        return;
    }
    play.play();
    interval = setInterval(regressiveCounter, 1000)
    startOrPauseTbn.textContent = "Pausar";
    startOrPauseIcon.setAttribute('src', '/imagens/pause.png');
}

function zerar(){
    clearInterval(interval);
    startOrPauseTbn.textContent = "Começar";
    startOrPauseIcon.setAttribute('src','/imagens/play_arrow.png');
    interval = null;
}

function showTime() {
    const time = new Date(counter * 1000);
    const formattedTime = time.toLocaleTimeString('pt-BR', {minute: "2-digit", second: "2-digit"});
    timeOnScreen.innerHTML = `${formattedTime}`;
}

showTime();