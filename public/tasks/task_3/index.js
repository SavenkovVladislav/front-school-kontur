// В файле /public/task_3/index.js допишите функцию проверки анаграмм checkAnagram(anagramArray).

// Аргументом функции checkAnagram является массив строк, которые нужно проверить.

// Возвращаемое значение — true/false в зависимости от того можно ли все слова массива составить из одних и тех же букв.

function checkAnagram(anagramArray) {
	const arrayLength = anagramArray.length
	const isEmptyArray = arrayLength === 0
	const isOneWordArray = arrayLength === 1
	const wordsAreDifferentLength = anagramArray.some(
		//Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.
		word => word.length !== anagramArray[0].length
	)

	// Если слов нет, или оно одно, или слова из разного количества символов
	// Это не анаграмма!
	if (isEmptyArray || isOneWordArray || wordsAreDifferentLength) {
		return false
	}

	// Флаг, в который мы запишем, является ли слово анаграммой при итерировании по массивам.
	let allWordsAreAnagrams = true

	// Проходимся по словам в массиве, начиная с первого
	for (let i = 0; i < anagramArray.length; i++) {
		// Записываем текущее слово в переменную word
		const word = anagramArray[i]
		// Записываем следующее слово в переменную nextWord
		const nextWord = anagramArray[i + 1]

		// Если следующего слова нет - выходим из цикла
		if (typeof nextWord === 'undefined' || allWordsAreAnagrams === false) {
			break
		}

		// Проходимся по буквам слова
		for (let j = 0; j < word.length; j++) {
			// Если в следующем слове есть такая же буква - всё ок
			const nextWordHasSameLetter = nextWord.indexOf(word[j]) !== -1
			if (nextWordHasSameLetter) {
				allWordsAreAnagrams = true
				// Если нет - сбрасываем флаг в false, выходим из цикла
			} else {
				allWordsAreAnagrams = false
				break
			}
		}

		// Пример: кот, ток
		// Первая итерация первого цикла и первая итерация второго цикла:
		// Второй цикл будет работать до дех пор, пока не закончатся буквы в первом слове (кот)
		// В переменную nextWordHasSameLetter записываем логическое значение true или false, которое высчитывается из следующего: метод .indexOf проходится по строке второго слова (ток, оно же nextWord) и ищет в нем первую букву первого слова (word[j] == к). Если word[j] будет в начале, то метод вернет 0, если word[j] будет в другом месте, то метод вернет 1, если word[j] не найдется, то метод вернет -1. Далее сравнивается, что вернет метод с -1, если буква была найдена, следовательно вернется 1 или 0, следовательно nextWordHasSameLetter будет равно true
		// Если nextWordHasSameLetter = true, тогда allWordsAreAnagrams = true
		// Вторая итерация второго цикла
		// Теперь будет сравниваться вторая буква первого слова (word) с вторым словом (nextWord)
		// И так далее. Все итерации второго цикла должны вернуть true иначе allWordsAreAnagrams = false и break
	}

	return allWordsAreAnagrams
}

export { checkAnagram }
