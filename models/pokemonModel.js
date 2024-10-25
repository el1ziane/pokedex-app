const pokemons = [
    {id : 1, nome : 'bulbasaur', tipo : 'grama'},
    {id : 2, nome : 'ivysaur', tipo : 'grama'},
    {id : 3, nome : 'venusaur', tipo : 'grama'},
    {id : 4, nome : 'charmander', tipo : 'fogo'},
    {id : 5, nome : 'charmeleon', tipo : 'fogo'},
];

const treinadorPokemons = [
    {id : 1, nomeTreinador : 'Treinador1', listaPokemon : pokemons},
    
];

const getPokemons = () => pokemons;
const getPokemonById = (id) => pokemons.find(p => p.id === id);
const createPokemon = (nome, tipo) => pokemons.push({id : pokemons.length + 1, nome, tipo});
const createPokemonTreinador = (nomeTreinador, listaPokemon) => treinadorPokemons.push({id : treinadorPokemons.length + 1, nomeTreinador, listaPokemon});

module.exports = { getPokemons, getPokemonById, createPokemon };