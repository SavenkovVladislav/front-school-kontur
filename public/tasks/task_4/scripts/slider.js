const sliderItem = document.querySelectorAll('.slider-item') // получаем все html-элементы с классом .slider-item
const sliderLine = document.querySelector('.slider-line') // получаем html-элемент с классом .slider-line
let count = 0 // считает на каком слайде сейчас находится слайдер
let width = undefined
const nextButton = document.querySelector('.btn-next')
const prevButton = document.querySelector('.btn-prev')

// функция init выполняется при загрузки страницы и рассчитывает ширину рабочей области слайдера и изменить его
function init() {
	width = document.querySelector('.slider').offsetWidth // .offsetWidth получает ширину html-элемента .slider

	sliderLine.style.width = width * sliderItem.length + 'px' // определяем ширину html-елемента .slider-line по формуле: ширина html-елемента .slider умноженная на количество элементов

	// данный цикл проходится по html-элементам .slider-item и задает каждому из них ширину равную ширине .slider и высоту равную auto
	sliderItem.forEach(item => {
		item.style.width = width + 'px'
		item.style.height = 'auto' // нужно для сохранения пропорций изображения (если в слайдере находятся картинки)
	})

	// функция вызывается для того, чтобы при каждом ресайзе корректно отображался .slider-item
	rollSlider()

	console.log('resize')
}

init()

// при изменении размеров окна будет вызываться функиця init
window.addEventListener('resize', init)

// при нажатии на кнопку вызывается анонимная функция, которая
nextButton.addEventListener('click', function () {
	count++

	// проверяет, если count больше или равно длинны масива sliderItem, то сбрасывает count в 0, что соответсвует первому слайду, это нужно для того, чтобы перемещаться к первому слайду, когда слайдер находится на последнем слайде и была нажата кнопка next
	if (count >= sliderItem.length) {
		count = 0
	}
	rollSlider()
})

prevButton.addEventListener('click', function () {
	count--

	// проверяет, если count меньше 0, то присваивает count значение, которое равно последнему элементу массива sliderItem, это нужно для того, чтобы перемещатся к последнему слайду, когда слайдер находится на первом слайде и была нажата кнопка prev
	if (count < 0) {
		count = sliderItem.length - 1
	}
	rollSlider()
})

// функиця считает на сколько необходимо передвигать слайдер
function rollSlider() {
	sliderLine.style.transform = 'translateX(-' + count * width + 'px)'
}
