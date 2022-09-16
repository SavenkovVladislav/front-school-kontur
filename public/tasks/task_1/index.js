//Функция должна принимать в качестве аргументов любое целое число и возвращать два массива чисел. В первый массив должны попасть числа от 0 до заданного числа, которые делятся на 3, во второй - все числа от 0 до заданного числа, которые делятся на 5. Например: getArrays(5) должен вернуть [[3], [5]]

function getArrays(number) {
	const result = [[], []]
	let arrayForThree = []
	let arrayForFive = []

	// проверка на тип параметра
	if (typeof number !== 'number') {
		console.log('Введите целое число')
		return
	}

	// проверка знака параметра
	if (Math.sign(number) === 1) {
		for (let i = 1; i < number + 1; i++) {
			if (i % 3 === 0) arrayForThree.push(i)
			if (i % 5 === 0) arrayForFive.push(i)
		}
	} else if (Math.sign(number) === -1) {
		for (let i = -1; i > number - 1; i--) {
			if (i % 3 === 0) arrayForThree.push(i)
			if (i % 5 === 0) arrayForFive.push(i)
		}
	}

	result[0] = arrayForThree
	result[1] = arrayForFive

	return result
}

export default getArrays
