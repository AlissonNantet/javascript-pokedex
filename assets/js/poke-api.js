
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon()
  // --- INFOS
  pokemon.number = pokeDetail.id
  pokemon.name = pokeDetail.name

  pokemon.gen = pokeDetail.gen
  pokemon.ability = pokeDetail.ability
  pokemon.height = pokeDetail.height

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
  const [type] = types

  pokemon.type = type
  pokemon.types = types
  pokemon.sprite = pokeDetail.sprites.other['official-artwork'].front_default

  return pokemon
}


// number;
// name;
// type;
// types = [];
// gen;
// ability;
// abilitys = [];
// weight;
// height;
// sprite;
// // --- Stats ---
// hp;
// attack;
// defense;
// spAttack;
// spDefense;
// speed;
// // --- Evolution ---
// evolution = [];
// evolutionName = [];

pokeApi.addPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon)
}

pokeApi.addPokemonInfos = (pokemon) => {
  return fetch(pokemon)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.addPokemonDetail))
    .then((detailRequest => Promise.all(detailRequest)))
    .then((pokemonDetails) => pokemonDetails)
}

pokeApi.getPokemonSpecie = (id = 1) => {
  const url = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;

  return fetch(url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon)
  // .then((infos) => infos.map(pokeApi.addPokemonInfos))
  // .then((detailRequest => Promise.all(detailRequest)))
  // .then((pokemonDetails) => pokemonDetails)
}