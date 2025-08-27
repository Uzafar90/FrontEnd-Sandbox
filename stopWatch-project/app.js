const getMillSecs = document.querySelector('.mill-seconds');
const getSeconds = document.querySelector('.seconds');
const getMinutes = document.querySelector('.minutes');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
let milli = 00;
let seconds = 00;
let minutes = 00;
let interval;

startBtn.addEventListener('click', () => {
	clearInterval(interval);
	interval = setInterval(startTime, 10);
});
stopBtn.addEventListener('click', () => {
	clearInterval(interval);
});
resetBtn.addEventListener('click', () => {
	clearInterval(interval);
	let milli = 00;
	let seconds = 00;
	let minutes = 00;
	getMillSecs.innerText = '00';
	getSeconds.innerText = '00';
	getMinutes.innerText = '00';
});

startTime = () => {
	milli++;
	if (milli <= 9) {
		getMillSecs.innerText = '0' + milli;
	}
	if (milli > 9) {
		getMillSecs.innerText = milli;
	}
	if (milli > 99) {
		seconds++;
		getSeconds.innerText = '0' + seconds;
		milli = 0;
		getMillSecs.innerText = '0' + 0;
	}
	if (seconds > 9) {
		getSeconds.innerText = seconds;
	}
	if (seconds > 59) {
		minutes++;
		getMinutes.innerText = '0' + minutes;
		seconds = 0;
		getSeconds.innerText = '0' + 0;
	}
	if (minutes > 9) {
		getMinutes.innerText = minutes;
	}
};
