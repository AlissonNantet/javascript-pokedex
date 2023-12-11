
function convertPokemonToLi(pokemon) {
  return `

  <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
          <ol class="types">
            <li class="type">Grass</li>
            <li class="type">Poison</li>
          </ol>

          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt=${pokemon.name}>

        </div>
      </li>

  `
}

const pokemonList = document.getElementById('pokemonList');


pokeApi.getPokemons()
  .then((pokemons) => {
    const listItens = []

    for (let i = 0; i < pokemons.length; i++) {
      const pokemon = pokemons[i];
      listItens.push(convertPokemonToLi(pokemon));
    }
    console.log(listItens);
  })