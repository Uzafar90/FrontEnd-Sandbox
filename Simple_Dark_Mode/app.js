const darkMode = document.getElementById('checkbox');

darkMode.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});
