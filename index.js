/* tady bude tvůj kód */

// const response = await fetch(
// 	'https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies'
// );
// const movies = await response.json();

// const movieList = document.querySelector('#movies');

// const showMovies = (movies) => {
// 	movies.forEach((movie) => {
// 		return `
// 		<div class="movie">
// 			<img class="movie__img" src="${movie.posterUrl}" alt="${movie.title}">
// 			<h2 class="movie__title"><a href="${movie.url}">${movie.title}</a></h2>
// 			<p class="movie__year">${movie.year}</p>
// 			<p class="movie__genre">${movie.genres.join(', ')}</p>
// 		</div>
// 	`;
// 	});
// };

const movieList = document.querySelector('#movies');

const Movie = ({ posterUrl, title, url, year, genres }) => {
	return `
		<div class="movie">
			<img class="movie__img" src="${posterUrl}" alt="${title}">
			<h2 class="movie__title"><a href="${url}">${title}</a></h2>
			<p class="movie__year">${year}</p>
			<p class="movie__genre">${genres.join(', ')}</p>
		</div>
	`;
};

const showMovies = (movies) => {
	movies.sort((a, b) => a.title.localeCompare(b.title));
	movies.forEach((movie) => {
		movieList.innerHTML += Movie(movie);
	});
};

fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
	.then((response) => response.json())
	.then(showMovies);
