const inputText = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

let inputTextValue = inputText.value;
let resultValue = result.value;

const checkPalindrome = (e) => {
  e.preventDefault();
  if (!inputText.value) {
    alert("Please input a value");
  }
};

checkButton.addEventListener("click", checkPalindrome);
