const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertNumber = (e) => {
  e.preventDefault();

  const number = parseInt(numberInput.value, 10);

  if (isNaN(number)) {
    output.innerHTML = "Please enter a valid number";
  } else if (number <= 0) {
    output.innerHTML = "Please enter a number greater than or equal to 1";
  } else if (number >= 4000) {
    output.innerHTML = "Please enter a number less than or equal to 3999";
  }
  return;
};

convertBtn.addEventListener("click", convertNumber);
