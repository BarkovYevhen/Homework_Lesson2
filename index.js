let num1 = prompt("Введіть перше число:");
let num2 = prompt("Введіть друге число:");
let num3 = prompt("Введіть третє число:");

num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);

const average = (num1 + num2 + num3) / 3;

alert(`Середнє арифметичне: ${average}`);