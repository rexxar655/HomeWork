const burger = document.querySelector('.burger__icon')
const body = document.querySelector('.body')


burger.addEventListener('click', () => {
    body.classList.toggle('body--opened-menu')
})

const link = document.querySelector('.head__list')

link.addEventListener('click', () => {
    body.classList.remove('body--opened-menu')
    
})

// (function(){
//     document.addEventListener('click', burgerinit)

//     function burgerinit(e) {
//         const burger = e.target.closest('.burger__icon')
//         const link = e.target.closest('.head__link')

//         if(!burger && !link) return
//         if (document.documentElement.clientWidth > 900) return

//         if(!document.body.classList.contains('body--opened-menu')){
//             document.body.classList.add('body--opened-menu')
//         } else {
//             document.body.classList.remove('body--opened-menu')
//         }

        
//     }
// })()
