const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertToRoman = (num) => {
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";

  for (const { value, symbol } of romanNumerals) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
};

const convertNumber = (e) => {
  e.preventDefault();

  const number = parseInt(numberInput.value, 10);
  console.log(number);

  if (isNaN(number)) {
    Object.assign(output.style, {
      border: "2px solid var(--danger)",
      backgroundColor: "var(--error)",
      color: "var(--danger)",
    });
    output.textContent = "Please enter a valid number";
  } else if (number <= 0) {
    Object.assign(output.style, {
      border: "2px solid var(--danger)",
      backgroundColor: "var(--error)",
      color: "var(--danger)",
    });
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (number >= 4000) {
    Object.assign(output.style, {
      border: "2px solid var(--danger)",
      backgroundColor: "var(--danger)",
      color: "var(--error)",
    });
    output.textContent = "Please enter a number less than or equal to 3999";
  } else {
    Object.assign(output.style, {
      fontFamily: "serif",
      fontSize: "40px",
      backgroundColor: "transparent",
    });
    output.textContent = convertToRoman(number);
  }
  return;
};

convertBtn.addEventListener("click", convertNumber);
