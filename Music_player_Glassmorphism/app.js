const music = document.getElementById('play_pause');

let audio = new Audio(
	'https://www.dropbox.com/s/otzixqddn99o8a2/0118.%20Uplift%20-%20AShamaluevMusic.mp3?dl=1'
);
let isPlaying = false;

const playMusic = () => {
	isPlaying = true;
	audio.play();
	music.src =
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKElEQVR4nGNgGAUjF/xHAwwkyo9awDAaRAyjqYggGA2iERBEo2D4AACK+75QGOZvBgAAAABJRU5ErkJggg==';
};

const pauseMusic = () => {
	isPlaying = false;
	audio.pause();
	music.src =
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAB5ElEQVRoge2ZMS8EQRTH7wgSIiEhcY1GcxoUdDqViE8g8RVUeo0PoFRSalWicRrR6BRoFBQkCiIhuPsp7m3y7m7Pzd3O7pjJ/prL3s689/9nZ3fezBQKOTk5ORpgGxh0rSMx1LkBVl1rSQSNnAKzrjX1hDLxJr+fwC4w4lpbVygjJWAfqMr1I7AJFF1rNCJyoa4XgQtlsALMu9RoRLMR+a9PnsaT3K4Ch8CkK50diTOi7o0Be8C3NHsBtoD+rHV25C8jqk0ZOFHD7QpYzkqjESZGVNt14F4ZOgam09ZoRDdGpP0wsAN8SNd3uR5KU6eJsK6MqH4zwJF6OnfAWhoaTQX1ZET1XwGulSE31UFSIxJjQL5mrxLuS752o7Z0mohIbETFKlGfb2oSNrvqwKYRFXMJuFTDrQLM2cwRl9S6EYkbVQfPkiKqDiZs54oSpmJExR+X9+VHUqVTHaRtROVZAM7VcLNbHWRlRHIVgQ3gQdLWgANgql2fviyE/SvyoWUe3++XPYjPL60T4hk+TYj4XqIQQtFIfBlftqnRVEhPRmhdWN3i08KKEJa6NG4+1OSJ+LP5gO/bQfi+QUf7LdN0ZmUbNBshfhM73VnZBkpwGMcKBHTQAwEcvQVxGBrG8XROTo7f/AKcSk4xvp2PUQAAAABJRU5ErkJggg==';
};

music.addEventListener('click', () => {
	isPlaying ? pauseMusic() : playMusic();
});
