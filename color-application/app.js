const button = document.querySelector('.click');
let randomColor = [
	'#9A0680',
	'#65C18C',
	'#495371',
	'#52006A',
	'#FEE3EC',
	'#FE7E6D',
	'#FF1700',
	'#FB7AFC',
	'#FFD371',
	'#F98404',
	'#3EDBF0',
	'#00AF91',
	'#EB596E',
	'#0F4C75',
	'#8B9A46',
	'#84142D',
	'#A7D129',
];
let count = 0;

button.addEventListener('click', (e) => {
	if (count > randomColor.length - 1) count = 0;
	document.body.style.backgroundColor = randomColor[count++];
});
