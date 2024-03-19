const html = document.querySelector('html');
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const bannerImg = document.querySelector('.app__image');

focoBtn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
    bannerImg.setAttribute('src', '/imagens/foco.png')
});

curtoBtn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
    bannerImg.setAttribute('src', '/imagens/descanso-curto.png')
})

longoBtn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
    bannerImg.setAttribute('src', '/imagens/descanso-longo.png')
})