const pokemonInfo = document.getElementById('content');
// const puxarPokemon = document.getElementById('puxarPokemon');


function convertPokemonInfosToLi(pokemon) {
  return `
  <ol class="content-list ${pokemon.type}DG">
      <li>
        <a href="../../index.html">
          <button type="button" class="button ${pokemon.type}">
            ⬅
          </button>
        </a>

        <ol id="pokemonInfos">
                <div class="img">
                      <img src="${pokemon.sprite}" alt="${pokemon.name}">
                </div>

          <ol class="pagina">
                <li>
                    <h1>${pokemon.name}</h1>
                    <ol class="types">
                      ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                <li>

                <li class="infos">
                <ol class="gen ${pokemon.type}DG">
                  <li>Pokedex Nº: #${pokemon.number}</li>
                  <li  class="${pokemon.type}FC">${verificaGeracao(pokemon)}</li>
                </ol>

                    <ol class="abilities">
                      <p>
                        Abilidade:${pokemon.abilities.map((ability, hidden) => `<li class="ability ${pokemon.hidden[hidden]}">${ability}</li>`).join('|')}
                      </p>
                    </ol>

                    <p>Peso: ${pokemon.weight}</p>
                    <p>Altura: ${pokemon.height}</p>
                    <p>Base Exp.: ${pokemon.baseExp}</p>
                </li>

                <li class="stats">
                    <h2>base status</h2>
                    <p>HP: ${pokemon.hp}</p>
                    <p>ATK: ${pokemon.attack}</p>
                    <p>dEF: ${pokemon.defense}</p>
                    <p>SP. ATK: ${pokemon.spAttack}</p>
                    <p>SP. DEF: ${pokemon.spDefense}</p>
                    <p>SPD: ${pokemon.speed}</p>
                </li>

                <li class="moves">
                  <h2>Movimentos</h2>

                <div class="tabela">

                  <table>
                    <tr class="${pokemon.type}DG">
                      <th class="cabecalho">Nome</th>
                      <th class="cabecalho ${pokemon.type}FC">level</th>
                      <th class="cabecalho ${pokemon.type}FC">método</th>
                    </tr>

                    ${pokemon.movesNames.map((move, lvl) => `
                      <tr>
                        <td>
                          ${move}
                        </td>
                        <td>
                          ${pokemon.movesLevels[lvl]}
                        </td>
                        <td>
                          ${pokemon.movesMethods[lvl]}
                        </td>
                        </tr>
                        `).join('')
    }
                  </table>
                </div>

              </li>
          </ol>
        </ol>

      </li>
  </ol>
  `
}
function verificaGeracao(pokemon) {
  if (pokemon.number <= 151) { return pokemon.gen = '1º Geração' }
  else if (pokemon.number > 151 && pokemon.number <= 251) { return pokemon.gen = '2ºGen' }
  else if (pokemon.number > 251 && pokemon.number <= 386) { return pokemon.gen = '3ºGen' }
  else if (pokemon.number > 386 && pokemon.number <= 493) { return pokemon.gen = '4ºGen' }
  else if (pokemon.number > 493 && pokemon.number <= 649) { return pokemon.gen = '5ºGen' }
  else if (pokemon.number > 649 && pokemon.number <= 721) { return pokemon.gen = '6ºGen' }
  else if (pokemon.number > 721 && pokemon.number <= 809) { return pokemon.gen = '7ºGen' }
  else if (pokemon.number > 809 && pokemon.number <= 890) { return pokemon.gen = '8ºGen' }
}

const offset = 0;
const limit = 1;


function loadPokemonSpecs(offset, limit) {
  pokeApi.getPokemons(offset, limit)
    .then((pokemon = []) => {
      const newHtml = pokemon.map((pokemon) => convertPokemonInfosToLi(pokemon)).join('')
      pokemonInfo.innerHTML = newHtml;
      console.log(pokemon);
    })
}

loadPokemonSpecs(offset, limit);