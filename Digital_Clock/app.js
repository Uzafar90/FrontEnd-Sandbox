const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');
const hours = document.querySelector('.hours');
const time_display = document.querySelector('.time_display');
const date_display = document.querySelector('.date_display');
const day_display = document.querySelector('.day_display');

let second = '';
let minute = '';
let hour = '';

const setTimer = () => {
	let time = new Date();
	for (let i = 0; i < 60; i++) {
		second += `<span style="--i:${i}">${i}</span>`;
		seconds.innerHTML = second;
	}
	let secs = time.getSeconds();
	const secondCount = (secs / 60) * -360;
	seconds.style.transform = `rotate(${secondCount}deg)`;

	for (let j = 0; j < 60; j++) {
		minute += `<span style="--i:${j}">${j}</span>`;
		minutes.innerHTML = minute;
	}
	let mins = time.getMinutes();
	const minuteCount = (mins / 60) * -360;
	minutes.style.transform = `rotate(${minuteCount}deg)`;

	for (let i = 1; i < 13; i++) {
		hour += `<span style="--i:${i}">${i}</span>`;
		hours.innerHTML = hour;
	}
	let hrs = time.getHours();
	const hourCount = (hrs / 12) * -360;
	hours.style.transform = `rotate(${hourCount}deg)`;
};
intervalSec = setInterval(setTimer, 1000);
setTimer();

// Current Time Display
const showTime = () => {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	hour = hour ? hour : 12;
	am_pm = 'AM';
	if (hour > 12) {
		hour -= 12;
		am_pm = 'PM';
	}
	if (hour == 0) {
		hr = 12;
		am_pm = 'AM';
	}
	if (min < 10) {
		min = '0' + min;
	}
	time_display.innerHTML = `<h1 class="time_display">${hour}:${min}<span>${am_pm}</span></h1>`;
};
showTime();
setInterval(showTime, 1000);

const currentDate = () => {
	let date = new Date();
	const twelveMonths = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const sevenDays = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const date__month = twelveMonths[date.getMonth()];
	const date__weekDay = sevenDays[date.getDay()];
	const date__day = date.getDate();
	const date__year = date.getFullYear();

	date_display.innerHTML = `<h2 class="date_display">${date__month} ${date__day}, ${date__year}</h2>`;
	day_display.innerHTML = `<h2 class="day_display">${date__weekDay}</h2>`;
};
currentDate();
