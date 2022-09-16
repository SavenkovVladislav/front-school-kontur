// собираем все a(ссылки) html-элементы из header, в которых есть аттрибут href со значением # и проходимся по ним циклом
document.querySelectorAll('header a[href*="#"]').forEach(link => {
	// вешаем на каждый элемент link обработчик событий по клику
	link.addEventListener('click', function (e) {
		e.preventDefault()

		// вытаскиваем значение аттрибута href у ссылок и с помощью метода .substring(1) убираем первый символ в этом аттрибуте (#). Это делается для того, чтобы в дальнейшем обратиться к scrollTarget через id
		const href = link.getAttribute('href').substring(1)

		const scrollTarget = document.getElementById(href)

		const topOffset = 60
		// метод getBoundingClientRect() возвращает размер элемента и его позицию относительно viewport (часть страницы, показанная на экране, и которую мы видим)
		const elementPosition = scrollTarget.getBoundingClientRect().top
		const offsetPosition = elementPosition - topOffset
		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth',
		})
	})
})
