const burger = document.querySelector('.burger__icon')
const body = document.querySelector('.body')

burger.addEventListener('click', () => {
    body.classList.togle('body--opened-menu')
})