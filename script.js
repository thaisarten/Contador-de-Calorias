const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');

let isError = false;

let cleanInputString = function (str) {//passos 18 a 22 (for loop) e 23 a 28 (regex)
    const regex = /[+-\s]/g;
    return str.replace(regex, '');
}

function isInvalidInput(str) { //passos 29 a 35
    const regex = /\d+e\d+/i; // aqui não precisamos assinalar que é global (g) pq há apenas um valor. No entando, utilizamos a flag i para que o padrão regex se torne "case-insensitive"
    return str.match(regex);
}

function addEntry() { //passos 36 a 49 e 51 a 53
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
    const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name">
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories">
    `;
    targetInputContainer.insertAdjacentHTML('beforeend', HTMLString)
}
addEntryButton.addEventListener('click', addEntry);//passo 50
function getCaloriesFromInputs(list) { // passos 54 a 64
    let calories = 0;
    for (let i = 0; i < list.length; i++) {
        const currVal = cleanInputString(list[i].value);
        const invalidInputMatch = isInvalidInput(currVal);
        if (invalidInputMatch) {
            alert(`Invalid Input: ${invalidInputMatch[0]}`);
            isError = true;
            return null;
        }
        calories += Number(currVal);
    }
    return calories;
}