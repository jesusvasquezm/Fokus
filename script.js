const html = document.querySelector('html');
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const bannerImg = document.querySelector('.app__image');
const title = document.querySelector('.app__title');
const allBtns = document.querySelectorAll('.app__card-button');
const musicInput = document.getElementById('alternar-musica');
const playBtn = document.getElementById('start-pause');
const music = new Audio('sons/luna-rise-part-one.mp3');
let counter = 5;
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
    changedContext('foco')
    focoBtn.classList.add('active');
});

curtoBtn.addEventListener('click', () => {
    changedContext('descanso-curto')
    curtoBtn.classList.add('active')
})

longoBtn.addEventListener('click', () => {
    changedContext('descanso-longo')
    longoBtn.classList.add('active')
})



function changedContext(context) {
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
        zerar()
        alert("Finalizado")
        return;
    }
    counter -= 1;
    console.log('Temporizador ' + counter);
}
playBtn.addEventListener('click', timer())
function timer() {
    if(interval){
        zerar()
        return
    }
    interval = setInterval(regressiveCounter, 1000)
}

function zerar(){
    clearInterval(interval);
    interval = null;
}