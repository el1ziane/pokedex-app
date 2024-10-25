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
    const { nomeTreinador, pokemonIds } = req.body; // Receber IDs dos Pokémons
    if (!nomeTreinador || !pokemonIds || pokemonIds.length === 0) {
        return res.status(400).send('Nome do treinador e pelo menos um Pokémon são obrigatórios');
    }

    const listaPokemon = pokemonIds.map(id => pokemonModel.getPokemonById(parseInt(id))); // Obter Pokémons selecionados
    treinadorModel.createPokemonTreinador(nomeTreinador, listaPokemon); // Criar treinador com a lista de Pokémons

    res.redirect('/'); // Redireciona para a página principal ou onde desejar
};

module.exports = { getAllTreinador, getTreinador, createPokemonTreinador };
