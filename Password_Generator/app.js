const pgDisplay = document.getElementById('pg__display');
const pgChar = document.getElementById('pg__char');
const pgGenerateBtn = document.getElementById('genBtn"');
const pgCopyBtn = document.getElementById('copyBtn');
const copiedText = document.querySelector('.copiedText');

const passwordGenerate = () => {
	let totalChar =
		'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-+=';
	let charLength = pgChar.value;
	let password = '';

	for (let i = 0; i < charLength; i++) {
		let randomNumber = Math.floor(Math.random() * totalChar.length);
		password += totalChar.substring(randomNumber, randomNumber + 1);
	}
	pgDisplay.value = password;
};
passwordGenerate();

const passwordClipboard = () => {
	let copyText = pgDisplay;
	copyText.select();
	navigator.clipboard.writeText(copyText.value);
	copiedText.style.display = 'block';
	setTimeout(() => {
		copiedText.style.display = 'none';
	}, 500);
};
passwordClipboard();
