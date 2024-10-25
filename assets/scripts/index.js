function calculator() {
  alert("Welcome to Simple JS Calculator!");

  let number = +prompt("Enter a number:");
  let number2 = +prompt("Enter a second number:");
  const calcMethod = prompt(
    `Enter calculation method:\n
Selection has to be +, -, * or /.`
  );
  let sum;

  switch (calcMethod) {
    case "+":
      sum = number + number2;
      break;
    case "-":
      sum = number - number2;
      break;
    case "*":
      sum = number * number2;
      break;
    case "/":
      sum = number / number2;
      break;
    default:
      sum = null;
  }

  let outputLine;

  if (sum === null) {
    outputLine = `The sum of your calculation is null because the selected calculation method is out of range.\n
Goodbye!`;
  } else {
    outputLine =
      `The sum of your calculation is: ` +
      sum +
      `.\n
Goodbye!`;
  }

  alert(outputLine);

  document.removeEventListener("DOMContentLoaded", calculator);
}

if (document.readyState === "loading") {
  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", calculator);
} else {
  // "DOMContentLoaded" has already fired
  calculator();
}
