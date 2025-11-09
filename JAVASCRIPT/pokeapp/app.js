const container = document.getElementById("pokemon-container");
const searchInput = document.querySelector(".topnav");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const limit = 21;
let offset = 0;
let totalPokemons = 0;

// Capitalize function
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Get data for one Pokémon
async function getPokemonData(url) {
  const res = await fetch(url);
  return await res.json();
}

// Get total count of pokemons from API
async function getTotalCount() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1");
  const data = await res.json();
  totalPokemons = data.count;
}

// Get batch of Pokémon
async function fetchPokemons() {
  container.innerHTML = ""; // Limpia antes de cargar
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data = await res.json();

  for (const pkmn of data.results) {
    const pkmnData = await getPokemonData(pkmn.url);
    createCard(pkmnData);
  }

  updateButtons();
  clearSearch();
}

// Crear la tarjeta
function createCard(pokemon) {
  const name = capitalize(pokemon.name);
  const id = pokemon.id;
  const image = pokemon.sprites.front_default;
  const types = pokemon.types.map((t) => t.type.name.toUpperCase());

  const card = document.createElement("div");
  card.classList.add("container");

  card.innerHTML = `
    <img src="${image}" alt="${name}" />
    <div class="idt">&nbsp; ID / ${id} &nbsp;</div>
    <h3 class="name">${name}</h3>
    <div class="tag-container">
      ${types.map((type) => `<span class="tag">${type}</span>`).join("")}
    </div>
  `;

  container.appendChild(card);
}

// Actualiza estado de botones
function updateButtons() {
  prevBtn.disabled = offset === 0;
  nextBtn.disabled = offset + limit >= totalPokemons;
}

// Limpia la búsqueda y muestra todo
function clearSearch() {
  searchInput.value = "";
  filterPokemons("");
}

// Filtra los Pokémon mostrados en la página actual
function filterPokemons(query) {
  query = query.toLowerCase();
  const cards = document.querySelectorAll(".container");

  let anyVisible = false;

  cards.forEach((card) => {
    const name = card.querySelector(".name").textContent.toLowerCase();
    const match = name.includes(query);
    card.style.display = match ? "" : "none";
    if (match) anyVisible = true;
  });

  // Mensaje si no hay resultados
  const noResultsId = "no-results";
  let msg = document.getElementById(noResultsId);
  if (!anyVisible) {
    if (!msg) {
      msg = document.createElement("p");
      msg.id = noResultsId;
      msg.textContent = "No se encontraron resultados.";
      msg.style.textAlign = "center";
      container.appendChild(msg);
    }
  } else {
    if (msg) msg.remove();
  }
}

// Eventos
searchInput.addEventListener("input", (e) => {
  filterPokemons(e.target.value);
});

prevBtn.addEventListener("click", () => {
  if (offset === 0) return;
  offset -= limit;
  fetchPokemons();
});

nextBtn.addEventListener("click", () => {
  if (offset + limit >= totalPokemons) return;
  offset += limit;
  fetchPokemons();
});

// Inicializar
(async () => {
  await getTotalCount();
  fetchPokemons();
})();
