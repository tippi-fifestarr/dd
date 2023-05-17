const apiKey = "a0ef4ba8ee3fbb16b31e963d0e8099e2";
const cardsContainer = document.querySelector(".cards-container");
const detailView = document.querySelector(".detail-view");

async function fetchMovies() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    );
    return response.data.results.slice(0, 20);
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}

function renderCards(movies) {
  const cards = movies
    .map((movie) => {
      return `
            <div class="card" data-id="${movie.id}">
                <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
            </div>`;
    })
    .join("");
  cardsContainer.innerHTML = cards;
}

function showDetailView(movie) {
  detailView.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
        <p>${movie.overview}</p>
    `;
}

async function fetchMovieDetails(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
}

cardsContainer.addEventListener("click", async (e) => {
  if (e.target.closest(".card")) {
    const card = e.target.closest(".card");
    const id = card.dataset.id;
    const movieDetails = await fetchMovieDetails(id);
    showDetailView(movieDetails);
  }
});

cardsContainer.addEventListener("dblclick", (e) => {
  if (e.target.closest(".card")) {
    const card = e.target.closest(".card");
    card.classList.toggle("flipped");
  }
});

fetchMovies().then(renderCards);
