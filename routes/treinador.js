const express = require('express');
const router = express.Router();
const treinadorController = require('../controllers/treinadorController');
const pokemonModel = require('../models/pokemonModel');

// Exibir o formulário de cadastro com os Pokémons disponíveis
router.get('/cadastrarTreinador', (req, res) => {
    const pokemons = pokemonModel.getPokemons(); // Obtenha os Pokémons
    res.render('formularioTreinador', { pokemons }); // Passa a lista de Pokémons para a view
});

// Rota para o POST (cadastro do treinador)
router.post('/cadastrarTreinador', treinadorController.createPokemonTreinador);

module.exports = router;
