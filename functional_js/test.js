let number = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let acumulado = 0;
for (num of number) {
  // number.push(i);
  acumulado += num * 2;
}

console.log(number);
console.log(acumulado);

const suma = number.reduce((acum, num) => (acum += num * 2), 0);
console.log(suma);
