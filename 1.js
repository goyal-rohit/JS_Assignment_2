//Write a Javascript function to check whether a triangle is equilateral, isosceles or scalene

function IsValid(x, y, z) {
  if (x + y > z && y + z > x && x + z > y) {
    console.log("The entered sides of Triangle constitute a valid triangle");
    CheckTriangle(x, y, z);
  } else {
    console.log("The entered sides of Triangle doesn't constitute a valid triangle");
  }
}

function CheckTriangle(x, y, z) {
  let result;
  if (x == y && y == z) {
    result = "Equilateral";
  } else if (x == y || (y == z) | (z == x)) {
    result = "Isosceles";
  } else {
    result = "Scalene";
  }
  console.log(`The entered sides of Triangle constitute a ${result} triangle`);
}

let x = 20;
let y = 5;
let z = 6;
IsValid(x, y, z);
