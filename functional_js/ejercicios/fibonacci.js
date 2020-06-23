// function fibbo() {
//   var fibbonachi = [0, 1];
//   var auxiliar = 0;
//   for (let i = 2; i < 100; i++) {
//     auxiliar = fibbonachi[i - 2] + fibbonachi[i - 1];
//     fibbonachi.push(auxiliar);
//   }
//   console.log(fibbonachi);
// }

// fibbo();

function fibonacci(numero) {
  let numeros = [0, 1];
  for (let i = 2; i < numero; i++) {
    numeros[i] = numeros[i - 2] + numeros[i - 1];
  }
  console.log(numeros);
}

fibonacci(20);
