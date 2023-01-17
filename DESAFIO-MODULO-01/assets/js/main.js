const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

let maxRecords = 151
let limit = 15
let offset = 0


function loadPokemonItens(offset, limit) {
    
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) =>
            `
            <li class="pokemon ${pokemon.type}">
                <div class="detail-image">
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
                <div class="detail-text">
                    <span class="name">${pokemon.name}</span>
                    <span class="number">#${pokemon.number}</span> 
                </div>
                <div class="detail-types">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                </div>

                <div class="detail-Info">
                    <div class="detail-info-measure">
                        <p>Height: ${(pokemon.height)/10}m</p>
                        <p>Weight: ${(pokemon.weight)/10}Kg</p>
                    </div>

                    <p id="title-ability">Abilities:</p>
                    <div class="detail-info-ability">
                        ${pokemon.abilities.map((ability) => `<p>${ability}</p>`).join('')}
                    </div>
                </div>
                <div class="detail-more-info">
                    <h2 class="${pokemon.type}">More Info</h2>
                </div>
            </li>
            `
        ).join('')
        pokemonList.innerHTML += newHtml
     })
}

/*
 <p>Base Stats</p>
                    <p>HP   : ${pokemon.hp}</p>
                    <p>ATK  : ${pokemon.atk}</p>
                    <p>DEF  : ${pokemon.def}</p>
                    <p>SATK : ${pokemon.satk}</p>
                    <p>SDEF : ${pokemon.sdef}</p>
                    <p>SPD  : ${pokemon.spd}</p>
*/
loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', ()=> {
    offset += limit
    const qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})  

const btnGen01 = document.getElementById('btn_gen_01')
const btnGen02 = document.getElementById('btn_gen_02')
const btnGen03 = document.getElementById('btn_gen_03')
const btnGen04 = document.getElementById('btn_gen_04')

btnGen01.addEventListener('click', (offset, maxRecords) => {
    pokemonList.innerHTML = ''
    offset = 0
    maxRecords = 151
    loadPokemonItens(offset, maxRecords)
    loadMoreButton.parentElement.removeChild(loadMoreButton)
})

btnGen02.addEventListener('click', (offset, maxRecords) => {
    pokemonList.innerHTML = ''
    offset = 151
    maxRecords = 100
    loadPokemonItens(offset, maxRecords)
    loadMoreButton.parentElement.removeChild(loadMoreButton)
})

btnGen03.addEventListener('click', (offset, maxRecords) => {
    pokemonList.innerHTML = ''
    offset = 251
    maxRecords = 135
    loadPokemonItens(offset, maxRecords)
    loadMoreButton.parentElement.removeChild(loadMoreButton)
})

btnGen04.addEventListener('click', (offset, maxRecords) => {
    pokemonList.innerHTML = ''
    offset = 386
    maxRecords = 108
    loadPokemonItens(offset, maxRecords)
    loadMoreButton.parentElement.removeChild(loadMoreButton)
})


