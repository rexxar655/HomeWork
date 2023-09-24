

const modalbtn = document.querySelector('.btn-open')
const modalWindow = document.querySelector('.modal')

modalbtn .addEventListener('click', () =>{
	// modalWindow.classList.toggle('visibl')
	modalWindow.style.visibility = 'visible'
	
})

const modalClosebtn = document.querySelector('.modal-close-btn')

modalClosebtn.addEventListener('click', () => {
	
	modalWindow.style.visibility = 'hidden'
})