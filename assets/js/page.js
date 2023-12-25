const pokemonInfo = document.getElementById('pokemonInfos');
// const puxarPokemon = document.getElementById('puxarPokemon');

function convertPokemonInfosToLi(pokemon) {
  return `
  <ol>
      <li class="top-info">
          <span>#${pokemon.number}</span>
      </li>

      <li class="img">
            <img src="${pokemon.sprite}" alt="${pokemon.name}">
      </li>
    </ol>

    <ol class="pagina">
        <li>
              <h2>${pokemon.name}</h2>
            <ol class="types">
              ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>

            <p>Geração:  </p>
            <p>Abilidade: </p>
            <p>Peso: </p>
            <p>Altura: </p>
        </li>

        <li class="stats">
            <h3>base Status</h3>
            <p>HP: </p>
            <p>ATK: </p>
            <p>dEF: </p>
            <p>SP. ATK: </p>
            <p>SP. DEF: </p>
            <p>SPD: </p>
        </li>

        <li class="evolution">
          <h4>EVOLUÇÕES</h4>
          <ol>
            <li class="forms">

            <span class="evo"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="foto base">
              <p>base</p>
            </span>
            <p class="seta">➡</p>

            <span class="evo"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="foto evo1">
              <p>evo1</p>
            </span>
            <p class="seta">➡</p>

            <span class="evo"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="foto evo2">
              <p>evo2</p>
            </span>

            </li>
            </ol>

            </li>
            </ol>
        `
}

const id = 1;

function loadPokemonSpecie(id) {
  pokeApi.getPokemonSpecie(id)
    .then((pokemons = []) => {
      // const newHtml = pokemons.map((pokemon) => convertPokemonToLi(pokemon)).join('')
      // pokemonList.innerHTML += newHtml;
      console.log(pokemons);
    })
}

loadPokemonSpecie(id);