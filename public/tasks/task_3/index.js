function checkAnagram(anagramArray) {
  let AAL = anagramArray.length;

  if (AAL === 0 || AAL === 1) return false;

  let El1L = anagramArray[0].length;
  for (let i = 0; i < AAL; i++)
    if (anagramArray[i].length !== El1L) return false;

  for (let i = 0; i < AAL; i++) {
    anagramArray[i] = anagramArray[i].toLowerCase();
  }

  let LetterArray = anagramArray[0];
  let LAL = LetterArray.length;
  for (let i = 0; i < AAL; i++) {
    let flagAr = [];
    for (let j = 0; j < LAL; j++) {
      let flag = 0;
      for (let k = 0; k < LAL; k++) {
        if (anagramArray[i][j] === LetterArray[k]) {
          flagAr.push(k);
          flag = 1;
          break;
        }
      }
      for (let n = 0; n < flagAr.length; n++)
        for (let m = 0; m < flagAr.length; m++) {
          if (flagAr[n] === flagAr[m] && n != m) return false;
        }
      if (flag === 0) return false;
    }
  }

  return true;
}

export { checkAnagram };
