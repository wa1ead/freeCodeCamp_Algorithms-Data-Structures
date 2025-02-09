const inputText = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkPalindrome = (e) => {
  e.preventDefault();
  let inputTextValue = inputText.value;

  if (!inputTextValue) {
    alert("Please input a value");
    return;
  }
  if (inputTextValue.length == 1) {
    result.textContent = `${inputTextValue} is a palindrome`;
  }
  result.textContent = `${inputTextValue} is not a palindrome`;
};

checkButton.addEventListener("click", checkPalindrome);
