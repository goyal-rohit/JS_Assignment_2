//Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000
let max = 1000;
function AddMultiples(num) {
  let sum = 0;
  for (let i = 1; i < max; i++) {
    if (i % num == 0) {
      sum = sum + i;
    }
  }
  return sum;
}

let num1 = 3;
let num2 = 5;

let sum_1 = AddMultiples(num1);
let sum_2 = AddMultiples(num2);
let sums = AddMultiples(num1 * num2);
console.log(`The sum of Multiples of ${num1} and ${num2} is ${sum_1 + sum_2 - sums}`);
