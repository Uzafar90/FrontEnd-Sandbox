// Declare the current date and future date
const countdown = () => {
	const newYear = new Date('Jan 1 2023');
	const currentYear = new Date();
	const timer = newYear - currentYear;

	//Assign each element a value
	const seconds = 1000;
	const minutes = seconds * 60;
	const hours = minutes * 60;
	const days = hours * 24;

	//Calculate each element declare the value
	const cdDay = Math.floor(timer / days);
	const cdHour = Math.floor((timer % days) / hours);
	const cdMinute = Math.floor((timer % hours) / minutes);
	const cdSecond = Math.floor((timer % minutes) / seconds);

	// Get all the required element by ID
	document.getElementById('day').innerText = cdDay;
	document.getElementById('hour').innerText = cdHour;
	document.getElementById('minute').innerText = cdMinute;
	document.getElementById('second').innerText = cdSecond;
};
setInterval(countdown, 1000);
