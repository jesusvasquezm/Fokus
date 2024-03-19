const html = document.querySelector('html');
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const bannerImg = document.querySelector('.app__image');
const title = document.querySelector('.app__title');

focoBtn.addEventListener('click', () => {
    changedContext('foco')
});

curtoBtn.addEventListener('click', () => {
    changedContext('descanso-curto')
})

longoBtn.addEventListener('click', () => {
    changedContext('descanso-longo')
})

function changedContext(context) {
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