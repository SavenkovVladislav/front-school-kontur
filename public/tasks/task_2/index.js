function encode(text, openAlph, secureAlph) {
  // Пиши свой код здесь
  let OAU = openAlph.toUpperCase();
  let SAU = secureAlph.toUpperCase();
  let SText = [];
  let punctuationArr = [" ", ",", ".", "!", "?"];
  let numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < openAlph.length; j++) {
      for (let k = 0; k < punctuationArr.length; k++) {
        if (text[i] === punctuationArr[k]) {
          SText[i] = text[i];
          break;
        }
      }
      for (let h = 0; h < numbersArr.length; h++) {
        if (text[i] === numbersArr[h]) {
          SText[i] = text[i];
          break;
        }
      }
      if (text[i] === OAU[j]) {
        SText[i] = SAU[j];
        break;
      }
      if (text[i] === openAlph[j]) {
        SText[i] = secureAlph[j];
        break;
      }
    }
  }
  return SText.join("");
}

export { encode };
