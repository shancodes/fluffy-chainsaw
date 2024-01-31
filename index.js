function calculateMortgagePayment(){
    let amount = parseFloat(document.getElementById('amount').value);
    let interestRate = parseFloat(document.getElementById('interest').value) / 100 / 12;
    let term = parseFloat(document.getElementById('years').value) * 12;

    let mortgageAmount = (amount * interestRate * Math.pow(1 + interestRate,term)) / (Math.pow(1+interestRate,term)-1);

   let resultElement = document.getElementById('result');
   resultElement.innerHTML = `<h2>Result</h2>`;
   resultElement.innerHTML += `<p> Mortgage Payment: $ ${mortgageAmount.toFixed(2)} </p>`; 
}
