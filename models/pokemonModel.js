const pokemons = [
    {id : 1, nome : 'bulbasaur', tipo : 'grama'},
    {id : 2, nome : 'ivysaur', tipo : 'grama'},
    {id : 3, nome : 'venusaur', tipo : 'grama'},
    {id : 4, nome : 'charmander', tipo : 'fogo'},
    {id : 5, nome : 'charmeleon', tipo : 'fogo'},
];

const getPokemons = () => pokemons;
const getPokemonById = (id) => pokemons.find(p => p.id === id);
const createPokemon = (nome, tipo, imagem) => pokemons.push({ id: pokemons.length + 1, nome, tipo, imagem });

module.exports = { getPokemons, getPokemonById, createPokemon };