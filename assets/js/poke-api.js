const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon()

  // --- INFOS

  pokemon.number = pokeDetail.id
  pokemon.name = pokeDetail.name

  const abilities = pokeDetail.abilities.map((abilitiesSlot) => abilitiesSlot.ability.name)
  const [ability] = abilities

  const hidden = pokeDetail.abilities.map((hiddenSlot) => hiddenSlot.is_hidden)
  const [eHidden] = hidden;


  pokemon.ability = ability
  pokemon.abilities = abilities
  pokemon.eHidden = eHidden
  pokemon.hidden = hidden

  pokemon.height = pokeDetail.height
  pokemon.weight = pokeDetail.weight

  pokemon.baseExp = pokeDetail.base_experience

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
  const [type] = types

  pokemon.type = type
  pokemon.types = types
  pokemon.sprite = pokeDetail.sprites.other['official-artwork'].front_default

  // STATS

  const stat = pokeDetail.stats.map((statsSlot) => statsSlot.base_stat)

  pokemon.hp = stat[0]
  pokemon.attack = stat[1]
  pokemon.defense = stat[2]
  pokemon.spAttack = stat[3]
  pokemon.spDefense = stat[4]
  pokemon.speed = stat[5]

  // MOVES

  const movesNames = pokeDetail.moves.map((moveSlot) => moveSlot.move.name)
  const [moveName] = movesNames

  pokemon.moveName = moveName
  pokemon.movesNames = movesNames

  const movesLevels = pokeDetail.moves.map((lvlSlot) => lvlSlot.version_group_details[0].level_learned_at)
  const [moveLevel] = movesLevels

  pokemon.movesLevels = movesLevels
  pokemon.movesLevels = movesLevels

  const movesMethods = pokeDetail.moves.map((methodSlot) => methodSlot.version_group_details[0].move_learn_method.name)
  const [moveMethod] = movesMethods

  pokemon.moveMethod = moveMethod
  pokemon.movesMethods = movesMethods

  return pokemon
}

pokeApi.addPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
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