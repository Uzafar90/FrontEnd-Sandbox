const btns = document.querySelectorAll('.value');
const input = document.querySelector('input');
let string = '';

Array.from(btns).forEach((btn) => {
	btn.addEventListener('click', (e) => {
		// Clear the display
		if (e.target.innerHTML == 'AC') {
			string = '';
			input.value = '';

			// Delete the value
		} else if (e.target.innerHTML == 'CE') {
			string = string.slice(0, -1);
			input.value = string;

			// Create equal operand
		} else if (e.target.innerHTML == '=') {
			string = eval(string);
			input.value = string;

			// Create Sin operand
		} else if (e.target.innerHTML == 'Sin') {
			string = Math.sin(parseFloat(string)).toFixed(11);
			input.value = string;

			// Create Cos operand
		} else if (e.target.innerHTML == 'Cos') {
			string = Math.cos(parseFloat(string)).toFixed(11);
			input.value = string;

			// Create Tan operand
		} else if (e.target.innerHTML == 'Tan') {
			string = Math.tan(parseFloat(string)).toFixed(11);
			input.value = string;

			// Create Log operand
		} else if (e.target.innerHTML == 'log') {
			string = Math.log(parseFloat(string)).toFixed(11);
			input.value = string;

			// Create Pi operand
		} else if (e.target.innerHTML == 'π') {
			string = 3.14;
			input.value = string;

			// Create Factorial operand
		} else if (e.target.innerHTML == 'x!') {
			string = factorial(string);
			input.value = string;

			// Create Exponent operand
		} else if (e.target.innerHTML == 'e') {
			string = 2.718;
			input.value = string;

			// Create Square Root operand
		} else if (e.target.innerHTML == '√') {
			string = Math.sqrt(parseFloat(string));
			input.value = string;

			// Create Cubic Root operand
		} else if (e.target.innerHTML == '∛') {
			string = Math.cbrt(parseFloat(string));
			input.value = string;

			// Just simple continue
		} else {
			console.log(e.target);
			string = string + e.target.innerHTML;
			input.value = string;
		}
	});
});

// A function to create factorial calculation
const factorial = (num) => {
	if (num === 0 || num === 1) return 1;
	for (var i = num - 1; i >= 1; i--) {
		num *= i;
	}
	return num;
};
factorial();
