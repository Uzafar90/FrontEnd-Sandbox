const data = [
	{
		id: 0,
		place: 'Pyramids of Giza',
		country: 'Giza, Egypt',
		info: 'Perhaps the most recognizable among the Seven Wonders of the World, the exact origin of these majestic pyramids continues to spark debate.',
		image:
			'https://images.unsplash.com/photo-1639851831822-36b6deeea50a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80',
	},

	{
		id: 1,
		place: 'King Faisal Mosque',
		country: 'Islamabad, Pakistan',
		info: 'Located on the foothills of Margalla Hills in Islamabad, the mosque features a contemporary design consisting of eight sides of a concrete shell and is inspired by a Bedouin tent.',
		image:
			'https://images.unsplash.com/photo-1608020932658-d0e19a69580b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
	},

	{
		id: 2,
		place: 'Colosseum',
		country: 'Rome, Italy',
		info: 'Perhaps the best-preserved of the monuments of ancient Rome, this huge marble structure was built to hold more than 50,000 spectators to witness bloody contests of might and the slaughter of wild beasts.',
		image:
			'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
	},

	{
		id: 3,
		place: 'Golden Gate Bridge',
		country: 'California, USA',
		info: 'Stretching 4,200 feet and towering as high as a 65-story building, this well-known bridge is the gateway to San Francisco.',
		image:
			'https://images.unsplash.com/photo-1521464302861-ce943915d1c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
	},

	{
		id: 4,
		place: 'Hagia Sophia Mosque',
		country: 'Istanbul, Turkey',
		info: 'This architectural marvel displays 30 million gold tiles throughout its interior, and a wide, flat dome which was a bold engineering feat at the time it was constructed in the 6th century.',
		image:
			'https://images.unsplash.com/photo-1569110462378-8bef8f4d9241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3071&q=80',
	},
	{
		id: 5,
		place: 'Eiffel Tower',
		country: 'Paris, France',
		info: 'Completed in 1889, this colossal landmark, although initially hated by many Parisians, is now a famous symbol of French civic pride.',
		image:
			'https://images.unsplash.com/photo-1492136344046-866c85e0bf04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1728&q=80',
	},
	{
		id: 6,
		place: 'Taj Mahal',
		country: 'Agra, India',
		info: "The Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.",
		image:
			'https://images.unsplash.com/photo-1631781101051-121237b6c7cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
	},
];

const imageSlider = document.querySelector('.is__container');
const prevBtn = document.querySelector('.arrow__left');
const nextBtn = document.querySelector('.arrow__right');

let i = 0;
let x = data.length;

const displaySlides = () => {
	imageSlider.innerHTML = `
        <div class="is__container">
            <div class="is__image">
                <img
                    src=${data[i].image}
                    alt=""
                />
            </div>
            <div class="is__content">
                <h1>${data[i].place}</h1>
                <h3>${data[i].country}</h3>
                <p>
                ${data[i].info}
                </p>
            </div>
        </div>
    `;
};
window.onload = displaySlides;

nextBtn.addEventListener('click', () => {
	i = (x + i + 1) % x;
	displaySlides();
});

prevBtn.addEventListener('click', () => {
	i = (x + i - 1) % x;
	displaySlides();
});
