const navigationMenu = document.querySelector('.navigation__menu');
const backgroundEffectOnMobile = document.querySelector('.background-effect-on-mobile');
const navigationList = document.querySelector('.navigation__list');

navigationMenu.addEventListener('click', () => {
    backgroundEffectOnMobile.classList.toggle('isActive');
    navigationList.classList.toggle('isActive');
})