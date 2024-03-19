const html = document.querySelector('html');
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const bannerImg = document.querySelector('.app__image');

focoBtn.addEventListener('click', () => {
    changedContext('foco')
});

curtoBtn.addEventListener('click', () => {
    changedContext('descanso-curto')
})

longoBtn.addEventListener('click', () => {
    changedContext('descanso-longo')
})

function changedContext(context){
    html.setAttribute('data-contexto', context)
    bannerImg.setAttribute('src',`/imagens/${context}.png`)
}