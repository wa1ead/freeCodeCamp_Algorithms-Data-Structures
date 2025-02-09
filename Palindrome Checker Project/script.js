const inputText = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkPalindrome = (e) => {
  e.preventDefault();
  let inputTextValue = inputText.value;
  console.log(inputTextValue);

  if (!inputTextValue) {
    alert("Please input a value");
    return;
  }
  if (inputTextValue.length == 1) {
    result.textContent = `${inputTextValue} is a palindrome`;
  }

  const normalisedInput = inputTextValue
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, "");

  const palindromeCheck =
    normalisedInput === normalisedInput.split("").reverse().join("")
      ? true
      : false;

  if (palindromeCheck) {
    result.textContent = `${inputTextValue} is a palindrome`;
  } else {
    result.textContent = `${inputTextValue} is not a palindrome`;
  }
};

checkButton.addEventListener("click", checkPalindrome);
