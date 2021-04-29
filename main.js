//income inputs
const incomeSalary = document.getElementById('income-salary');
const incomeFreelance = document.getElementById('income-freelance');
const incomeExtra1 = document.getElementById('income-extra-1');
const incomeExtra2 = document.getElementById('income-extra-2');

//expenses inputs
const expensesRent = document.getElementById('expenses-rent');
const expensesHousing = document.getElementById('expenses-housing');
const expensesTransport = document.getElementById('expenses-transport');
const expensesCredits = document.getElementById('expenses-credits');

//total inputs
const totalMonthInput = document.getElementById('total-month');
const totalDayInput = document.getElementById('total-day');
const totalYearInput = document.getElementById('total-year');

let totalMonth, totalDay, totalYear;

//moneybox
const moneyBoxRange = document.getElementById('saving');
const moneyBox = document.getElementById('volume')
const accumulationInput = document.getElementById('accumulation');
const spend = document.getElementById('expenses');

let accumulation = 0;
let totalPrecents = 0;



const inputs = document.querySelectorAll('.input');
for (input of inputs) {
	input.addEventListener('input', () => {
		countingAvailableMoney();
	});
}

moneyBoxRange.addEventListener('input', () => {
	totalPrecents = strToNum(moneyBoxRange);
	countingAvailableMoney();

})

const strToNum = str => str.value ? parseInt(str.value) : 0;

const countingAvailableMoney = () => {
	const totalPerMonth = strToNum(incomeSalary) + strToNum(incomeFreelance) + strToNum(incomeExtra1) + strToNum(incomeExtra2);
	const totalExpenses = strToNum(expensesRent) + strToNum(expensesHousing) + strToNum(expensesTransport) + strToNum(expensesCredits);

	totalMonth = totalPerMonth - totalExpenses;
	totalMonthInput.value = totalMonth;
	totalDay = (totalMonth - totalPrecents * totalMonth / 100) / 30;
	totalDayInput.value = totalDay;
	accumulationInput.value = totalPrecents * totalMonth / 100;
	spend.value = totalExpenses;
	totalYearInput.value = totalPrecents * totalMonth / 100 * 12;
	//console.log(totalDay);
	//console.log(strToNum(moneyBoxRange));

}


const outputUpdate = (vol) => {
	let output = document.querySelector('#volume');
	output.value = vol + '%';
	output.style.left = 2.5 * vol - 20 + 'px';
}





