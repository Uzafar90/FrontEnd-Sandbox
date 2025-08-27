const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const dateEL = document.querySelector('.date');

// Clock
analogClock = () => {
	const currentTime = new Date();
	const hour = currentTime.getHours();
	const minute = currentTime.getMinutes();
	const second = currentTime.getSeconds();
	const hourCount = (hour / 12) * 360;
	hours.style.transform = `rotate(${hourCount}deg)`;
	const minuteCount = (minute / 60) * 360;
	minutes.style.transform = `rotate(${minuteCount}deg)`;
	const secondCount = (second / 60) * 360;
	seconds.style.transform = `rotate(${secondCount}deg)`;
};
setInterval(analogClock, 1000);

// Date
digitalDate = () => {
	const currentDate = new Date();

	const day = currentDate.getDay();
	const days = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	];
	const newDay = days[day];
	const date = currentDate.getDate();
	const year = currentDate.getFullYear();
	dateEL.innerHTML = `${newDay} ${date}, ${year}`;
};
digitalDate();
