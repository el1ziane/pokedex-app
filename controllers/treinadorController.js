const treinadorModel = require('../models/treinadorModel');
const pokemonModel = require('../models/pokemonModel');

const getAllTreinador = (req, res) => {
    const treinadores = treinadorModel.getTreinador();
    res.render('index', { treinadores });
};

const getTreinador = (req, res) => {
    const treinador = treinadorModel.getTreinadorById(req.params.id);
    if (treinador) {
        res.render('treinador', { treinador });
    } else {
        res.status(404).send('Treinador não encontrado');
    }
};
const createPokemonTreinador = (req, res) => {
    const { nomeTreinador, pokemonIds } = req.body; 
    if (!nomeTreinador || !pokemonIds || pokemonIds.length === 0) {
        return res.status(400).send('Nome do treinador e pelo menos um Pokémon são obrigatórios');
    }

    const listaPokemonIds = pokemonIds.map(id => parseInt(id));
    treinadorModel.createPokemonTreinador(nomeTreinador, listaPokemonIds);

    res.redirect('/');
};


module.exports = { getAllTreinador, getTreinador, createPokemonTreinador };
