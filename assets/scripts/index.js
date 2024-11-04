/* Okej, nu är det dags att programmera en ordentlig, fast enkel miniräknare i JavaScript. Nedan kommer instruktionerna. Ni behöver som alltid en index.html och en index.js som måste vara ihopkopplade.
Skapa en prompt som frågar om ett valfritt tal. Spara undan i en variabel.

Skapa en prompt till som frågar om ett annat tal. Spara i en variabel.

Skapa ny en tredje prompt som frågar vilket räknesätt användare vill använda. Det bör framgå att endast +, -, * och / är möjliga. Denna ska också sparas i en variabel.

Skapa en if-else-if ( eller en switch ) check där du checkar de olika alternativen. Till exempel. Om räknesättet är lika med addition, så ska en addition utföras mellan de två talen och en alert ska poppa upp och redovisa resultatet. Är det subtraktion som gäller så ska subtraktion ske mellan talen och så vidare.

Inkludera en else ( eller en default ) i slutet som hanterar alla utfall, om till exempel räknesättet skrivs in fel så det inte känns igen eller liknande.

Lägga gärna till lite skjyssta alerts innan och efter som hälsar en välkommen och säger hejdå och så. */

function calculator() {
  alert("Welcome to Simple JS Calculator!");

  const number1 = +prompt("Enter any number:");
  const number2 = +prompt("Enter a second number:");
  const calculationMethod = prompt(`Enter calculation method:\n
Selection has to be +, -, * or /.`);

  let sum;

  switch (calculationMethod) {
    case "+":
      sum = number1 + number2;
      break;
    case "-":
      sum = number1 - number2;
      break;
    case "*":
      sum = number1 * number2;
      break;
    case "/":
      sum = number1 / number2;
      break;
    default:
      sum = null;
  }

  let output;

  if (sum === null) {
    output = `The sum of your calculation is null because the selected calculation method is out of range.\n
Goodbye!`;
  } else {
    output =
      `The sum of your calculation is: ` +
      sum +
      `.\n
Goodbye!`;
  }

  alert(output);

  // Remove EventTarget listener after execution
  document.removeEventListener("DOMContentLoaded", calculator);
}

// Wait for DOM to load completely before executing calculator
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", calculator);
} else {
  calculator();
}
