const treinadorModel = require('../models/treinadorModel');
const pokemonModel = require('../models/pokemonModel');

const getAllPokemons = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    const treinadores = treinadorModel.getTreinador(); // Pegar a lista de treinadores
    
    res.render('index', { pokemons, treinadores }); // Passar ambos para a view
};

const getPokemon = (req, res) => {
    const pokemon = pokemonModel.getPokemonById(req.params.id);
    if (pokemon) {
    res.render('pokemon', { pokemon });
    } else {
    res.status(404).send('Pokemon nao encontrado');
    }
};

const createPokemon = (req, res) => {
    const { nome, tipo } = req.body;
    if (!nome || !tipo) {
        return res.status(400).send('Nome e tipo são obrigatórios');
    }
    pokemonModel.createPokemon(nome, tipo);
    res.redirect('/');
};


module.exports = { getAllPokemons, getPokemon, createPokemon};