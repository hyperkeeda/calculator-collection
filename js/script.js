// js/script.js

document.addEventListener("DOMContentLoaded", function () {
    // Mortgage Calculator functionality
    const mortgageForm = document.getElementById("mortgageForm");
    if (mortgageForm) {
      mortgageForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const principal = parseFloat(document.getElementById("principal").value);
        const rate = parseFloat(document.getElementById("rate").value) / 100 / 12;
        const term = parseFloat(document.getElementById("term").value) * 12;
        if (principal > 0 && rate >= 0 && term > 0) {
          const monthlyPayment =
            (principal * rate * Math.pow(1 + rate, term)) /
            (Math.pow(1 + rate, term) - 1);
          document.getElementById("mortgageResult").innerText =
            "Monthly Payment: $" + monthlyPayment.toFixed(2);
        } else {
          document.getElementById("mortgageResult").innerText =
            "Please enter valid values.";
        }
      });
    }
  
    // Additional functionality for other calculators can be added here.
  });
  