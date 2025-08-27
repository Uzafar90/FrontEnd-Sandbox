const yeezy_change = document.querySelector('.yeezy_color_switch');
const bg_image = document.querySelector('.bg_image');

yeezy_change.addEventListener('click', function () {
	document.body.classList.toggle('yeezy_white');
	if (document.body.classList.contains('yeezy_white')) {
		bg_image.style.backgroundImage =
			'url(https://www.kicksonfire.com/wp-content/uploads/2016/11/adidas-Yeezy-Boost-350-V2-152.jpg?x58464)';
		yeezy_change.style.backgroundImage =
			'url(https://www.kicksonfire.com/wp-content/uploads/2016/11/adidas-Yeezy-Boost-350-V2-117.jpg)';
	} else {
		yeezy_change.style.backgroundImage =
			'url(https://www.kicksonfire.com/wp-content/uploads/2016/11/adidas-Yeezy-Boost-350-V2-152.jpg?x58464)';
		bg_image.style.backgroundImage =
			'url(https://www.kicksonfire.com/wp-content/uploads/2016/11/adidas-Yeezy-Boost-350-V2-117.jpg)';
	}
});
