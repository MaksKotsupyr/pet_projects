const poke_container = document.getElementById('poke_container');
const pokemons_number = 150;
const colors = {
	fire: 'rgb(255, 106, 106)',
	grass: 'lightgreen',
	electric: 'rgb(255, 229, 100)',
	water: 'rgb(128, 215, 255)',
	ground: '#fcb167',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#cea1db',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};
const main_types = Object.keys(colors);

const fetchPokemons = async () => {
	for (let i = 1; i <= pokemons_number; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async id => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon = await res.json();
	createPokemonCard(pokemon);
};

function createPokemonCard(pokemon) {
	const pokemonEl = document.createElement('div');
	pokemonEl.classList.add('pokemon');

	const poke_types = pokemon.types.map(type => type.type.name);
	const type = main_types.find(type => poke_types.indexOf(type) > -1);
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	const color = colors[type];

	const poke_stats_name = pokemon.stats.map(stat => stat.stat.name);
	const poke_stats_num = pokemon.stats.map(stats => stats.base_stat);
	const poke_weight = pokemon.weight;
	const poke_moves = pokemon.moves.map(moves => moves.move.name);
	
	pokemonEl.style.backgroundColor = color;
	
	const pokeInnerHTML = `
	<div class="card">
		<div class="front">
        	<div class="img-container">
            	<img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="${name}" />
        	</div>
        	<div class="info">
            	<span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
            	<h3 class="name">${name}</h3>
            	<small class="type">Type: <span>${type}</span></small>
			</div>
		</div>
		<div class="back">
			<span class="stats_title"><u>${name}</u></span>
			<span class="stats"><b>type:</b> ${type}</span>
			<span class="stats"><b>${poke_stats_name[0]}:</b> ${poke_stats_num[0]}</span>
			<span class="stats"><b>${poke_stats_name[1]}:</b> ${poke_stats_num[1]}</span>
			<span class="stats"><b>${poke_stats_name[2]}:</b> ${poke_stats_num[2]}</span>
			<span class="stats"><b>${poke_stats_name[3]}:</b> ${poke_stats_num[3]}</span>
			<span class="stats"><b>${poke_stats_name[4]}:</b> ${poke_stats_num[4]}</span>
			<span class="stats"><b>${poke_stats_name[5]}:</b> ${poke_stats_num[5]}</span>
			<span class="stats"><b>weight:</b> ${poke_weight}</span>
			<span class="stats"><b>total moves:</b> ${poke_moves.length}</span>
		</div>
	</div>
    `;

	pokemonEl.innerHTML = pokeInnerHTML;

	poke_container.appendChild(pokemonEl);
}
fetchPokemons();