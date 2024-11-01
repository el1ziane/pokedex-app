const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/', pokemonController.getAllPokemons);
router.get('/pokemon/:id', pokemonController.getPokemon);

router.get('/cadastrarPokemon', (req, res) => { 
    res.render('formularioPokemon'); 
});


router.post('/cadastrarPokemon', pokemonController.createPokemon);
module.exports = router;
