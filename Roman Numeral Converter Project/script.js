const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertNumber = (e) => {
  e.preventDefault();

  const number = parseInt(numberInput.value, 10);

  if (isNaN(number)) {
    output.setAttribute("id", "output-danger");
    output.innerHTML = `<p class='output-error'>Please enter a valid number</p>`;
  } else if (number <= 0) {
    output.setAttribute("id", "output-danger");
    output.innerHTML = `<p class='output-error'>Please enter a number greater than or equal to 1</p>`;
  } else if (number >= 4000) {
    output.setAttribute("id", "output-danger");
    output.innerHTML = `<p class='output-error'>Please enter a number less than or equal to 3999</p>`;
  }
  return;
};

convertBtn.addEventListener("click", convertNumber);
