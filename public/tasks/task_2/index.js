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
	// перевелем обе строки в upperCase чтобы
	let OAU = openAlph.toUpperCase()
	let SAU = secureAlph.toUpperCase()
	let SText = []
	let punctuationArr = [' ', ',', '.', '!', '?']
	let numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
	// коммент
	for (let i = 0; i < text.length; i++) {
		for (let j = 0; j < openAlph.length; j++) {
			if (punctuationArr.includes(text[i])) {
				SText[i] = text[i]
				break
			}
			if (numbersArr.includes(text[i])) {
				SText[i] = text[i]
				break
			}
			if (text[i] === OAU[j]) {
				SText[i] = SAU[j]
				break
			}
			if (text[i] === openAlph[j]) {
				SText[i] = secureAlph[j]
				break
			}
		}
	}
	return SText.join('')
}

export { encode }
