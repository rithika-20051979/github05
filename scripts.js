// script.js

function calculateFactorial() {
  const num = document.getElementById('numberInput').value;
  const resultDiv = document.getElementById('result');

  // Input Validation
  if (!num || num < 0) {
      resultDiv.innerHTML = "<span style='color:red;'>Please enter a valid positive integer.</span>";
      return;
  }

  // Iterative Method
  const iterativeResult = factorialIterative(num);

  // Recursive Method
  const recursiveResult = factorialRecursive(num);

  // Display results
  resultDiv.innerHTML = `
      <p><strong>Iterative Method:</strong> ${iterativeResult}</p>
      <p><strong>Recursive Method:</strong> ${recursiveResult}</p>
  `;
}

// Iterative Method (function)
function factorialIterative(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
      result *= i;
  }
  return result;
}

// Recursive Method (function)
function factorialRecursive(n) {
  if (n === 0 || n === 1) {
      return 1;
  }
  return n * factorialRecursive(n - 1);
}
