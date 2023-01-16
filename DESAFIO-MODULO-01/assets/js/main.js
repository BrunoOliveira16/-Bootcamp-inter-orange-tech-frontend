const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

let maxRecords = 151
let limit = 12
let offset = 0;



function loadPokemonItens(offset, limit) {
    
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) =>
            `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span> 

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>

                <div class="base-Info">
                    <p>informações</p>
                    <p>Height: ${pokemon.height} | Weight: ${pokemon.weight}</p>
                    <p></p>
                    <p>Habilidades:</p>
                    ${pokemon.abilities.map((ability) => `<span>${ability}</span>`).join(' | ')}
                    <p>Base Stats</p>
                    <p>HP   : ${pokemon.hp}</p>
                    <p>ATK  : ${pokemon.atk}</p>
                    <p>DEF  : ${pokemon.def}</p>
                    <p>SATK : ${pokemon.satk}</p>
                    <p>SDEF : ${pokemon.sdef}</p>
                    <p>SPD  : ${pokemon.spd}</p>
                </div>
            </li>
            `
        ).join('')
        pokemonList.innerHTML += newHtml
     })
}

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


btnGen01.addEventListener('click',(offset, limit)=>{
    pokemonList.innerHTML = ''
    offset = 151
    limit = 15
    
    loadPokemonItens(offset, limit)
    loadMoreButton(offset, limit)
})
