const express = require('express');
const router = express.Router();
const treinadorController = require('../controllers/treinadorController');
const pokemonModel = require('../models/pokemonModel');


router.get('/cadastrarTreinador', (req, res) => {
    const pokemons = pokemonModel.getPokemons(); 
    res.render('formularioTreinador', { pokemons }); 
});


router.post('/cadastrarTreinador', treinadorController.createPokemonTreinador);

module.exports = router;
