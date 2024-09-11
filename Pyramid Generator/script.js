const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
  return name;
}
const call = padRow("WALID");
console.log(call);

function addTwoNumbers(a, b) {
  return a + b;
}
const sum = addTwoNumbers(5, 10);
console.log(sum);

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1));
}

let result = "";

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
