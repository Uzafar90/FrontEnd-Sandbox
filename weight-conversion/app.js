const inputVal = document.getElementById('inputVal');
const inputSelector = document.getElementById('inputValueSelector');
const btn = document.getElementById('btn');
const result = document.getElementById('wc__result');
const error = document.getElementById('error');

result.innerHTML = 'Result:';
inputVal.value = '0';
let gram = 0;
let selector = null;

btn.addEventListener('click', (e) => {
	gram = inputVal.value;
	selector = inputSelector.value;
	if (gram === '' || gram === '0') {
		return (error.style.display = 'block');
	} else {
		error.style.display = 'none';
		switch (selector) {
			case 'pound':
				convert_pound(gram);
				break;
			case 'kilogram':
				convert_kilogram(gram);
				break;
			case 'ounces':
				convert_ounces(gram);
				break;
		}
	}
});

convert_pound = (gram) => {
	let rate = 0.00220462;
	pound = parseFloat(gram * rate).toFixed(3);
	result.innerHTML = `Result: ${pound}lbs`;
};
convert_kilogram = (gram) => {
	let rate = 1000;
	kilogram = parseFloat(gram / rate);
	result.innerHTML = `Result: ${kilogram}kg`;
};
convert_ounces = (gram) => {
	let rate = 0.035274;
	ounces = parseFloat(gram * rate);
	result.innerHTML = `Result: ${ounces}oz`;
};
