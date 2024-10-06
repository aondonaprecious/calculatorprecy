let calculation = localStorage.getItem('calculation') || '';

//display the calculation when the page first loads.

displayCalculation();

function updateCalculation(value) {
  calculation += value;

  //display the calculation on the page
  // instead of console.log 
  displayCalculation();

  localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
  document.querySelector('.js-calculation').innerHTML = calculation;
}