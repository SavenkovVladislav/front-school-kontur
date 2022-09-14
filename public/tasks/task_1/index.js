function getArrays(number) {
  const result = [[], []];
  // Пиши свой код здесь
  let arr3 = [];
  let arr5 = [];
  if (Number.isInteger(number) == true && Math.sign(number) === 1) {
    for (let i = 1; i < number + 1; i++) {
      if (i % 3 === 0) arr3.push(i);
      if (i % 5 === 0) arr5.push(i);
    }
  } else if (Number.isInteger(number) == true && Math.sign(number) === -1) {
    for (let i = -1; i > number - 1; i--) {
      if (i % 3 === 0) arr3.push(i);
      if (i % 5 === 0) arr5.push(i);
    }
  } else if (number === 0) {
    result[0] = arr3;
    result[1] = arr5;
  } else {
    console.log("Введите целое число");
    return;
  }

  result[0] = arr3;
  result[1] = arr5;

  return result;
}

export default getArrays;
