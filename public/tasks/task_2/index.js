/*В файле /src/task_2/index.js допишите функцию шифрования методом подстановки encode(text, openAlph, secureAlph).
Аргументы функции encode:

text - текст, который нужно зашифровать
openAlph - открытый алфавит
secureAlph - шифрованный алфавит
Возвращаемое значение — строка (зашифрованный текст).
Для шифрования необходимо каждый символ открытого алфавита заменять соответствующим символом закрытого алфавита.
Если в тексте встречаются небуквенные символы, то их нужно оставлять без изменения.
Наример:
encode(
  "message",
  "abcdefghijklmnopqrstuvwxyz",
  "rsyxuqldnmzvpofceiwktjgabh"
);
// должен вернуть "puwwrlu"*/

function encode(text, openAlph, secureAlph) {
	// openAlph и secureAlph в upperCase, потому что для JS буква в верхнем и нижнем регистре это две разные буквы
	let openAlphUpperCase = openAlph.toUpperCase()
	let secureAlphUpperCase = secureAlph.toUpperCase()
	let secureText = []
	let punctuationArr = [
		' ',
		'.',
		'?',
		'!',
		'...',
		':',
		';',
		',',
		'-',
		'--',
		'()',
	]
	let numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

	for (let i = 0; i < text.length; i++) {
		for (let j = 0; j < openAlph.length; j++) {
			// проверка на наличие в text знаков пунктуации
			if (punctuationArr.includes(text[i])) {
				secureText[i] = text[i]
				break
			}
			// проверка на наличие в text цифр
			if (numbersArr.includes(text[i])) {
				secureText[i] = text[i]
				break
			}
			// если в i-том элементе массива text есть j-тый элемент массива openAlphUpperCase, то в i-тый элемент массива secureText, записать j-тый элемент массива secureAlphUpperCase и выход из цикла.
			if (text[i] === openAlphUpperCase[j]) {
				secureText[i] = secureAlphUpperCase[j]
				break
			}
			// то же самое для массивов openAlph и secureAlph
			if (text[i] === openAlph[j]) {
				secureText[i] = secureAlph[j]
				break
			}
		}
	}
	// соединяем массив secureText в строку
	return secureText.join('')
}

export { encode }
