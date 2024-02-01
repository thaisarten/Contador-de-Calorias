const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;
let cleanInputStrig = function (str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, '');      
}
function isInvalidInput (str){
    const regex = /\d+e\d+/i; // aqui não precisamos assinalar que é global (g) pq há apenas um valor. No entando, utilizamos a flag i para que o padrão regex se torne "case-insensitive"
    return str.match(regex);
}