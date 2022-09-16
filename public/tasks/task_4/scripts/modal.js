const openButton = document.querySelector('#projectsModalButton')
const closeButton = document.querySelector('#projectsModalClose')
const modal = document.querySelector('#projectsModalWindow')

openButton.addEventListener('click', function () {
	modal.style.display = 'flex'
})

closeButton.addEventListener('click', function () {
	modal.style.display = 'none'
})
