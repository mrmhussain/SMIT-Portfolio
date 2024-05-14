function calculateSavings() {
    var income = parseFloat(document.getElementById('income').value);
    var expense = parseFloat(document.getElementById('expense').value);
    
    if (isNaN(income) || isNaN(expense)) {
        alert("Please enter valid numbers for income and expense.");
        return;
    }
    
    var savings = income - expense;
    
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Savings: $' + savings.toFixed(2);
}
