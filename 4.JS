//Write a program to find the factorial of all prime numbers between a given range.

let i, j, flag;

let lowerRange = 1;
let upperRange = 11;
function Prime(lowerRange, upperRange) {
  for (i = lowerRange; i <= upperRange; i++) {
    if (i == 0 || i == 1) {
      continue;
    }
    flag = 1;
    for (j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        flag = 0;
        break;
      }
    }
    if (flag == 1) {
      Factorial(i);
    }
  }
}

function Factorial(num) {
  let fact = 1;
  for (i = 2; i <= num; i++) {
    fact = fact * i;
  }
  console.log(`The Factorial of Prime number ${num} is ${fact}`);
}
Prime(lowerRange, upperRange);
