const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;
let cleanInputStrig = function (str) {
    const strArray = str.split(''); //Divide uma string em substrings q são colocadas em uma array
    const cleanStrArray = [];
    for (let i = 0; i < strArray.length; i++) {
        if(!['+','-',' '].includes(strArray[i])){
            cleanStrArray.push(strArray[i]); //
        }
    } //vai iterar cada caracter q foi armazenado na strArray. Cada um desses elementos será armazenado na array cleanStrArray.
}