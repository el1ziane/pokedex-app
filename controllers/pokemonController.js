const treinadorModel = require('../models/treinadorModel');
const pokemonModel = require('../models/pokemonModel');
const multer = require('multer');
const path = require('path');

const getAllPokemons = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    const treinadores = treinadorModel.getTreinador(); 
    
    res.render('index', { pokemons, treinadores });
};

const getPokemon = (req, res) => {
    const pokemon = pokemonModel.getPokemonById(req.params.id);
    if (pokemon) {
    res.render('pokemon', { pokemon });
    } else {
    res.status(404).send('Pokemon nao encontrado');
    }
};
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/pokemons'); 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});

const upload = multer({ storage: storage });
const createPokemon = (req, res) => {
    const { nome, tipo } = req.body;
    const imagem = req.file ? `/images/pokemons/${req.file.filename}` : '/images/pokemons/default.png';

    if (!nome || !tipo) {
        return res.status(400).send('Nome e tipo são obrigatórios');
    }

    pokemonModel.createPokemon(nome, tipo, imagem);
    res.redirect('/');
};

module.exports = { getAllPokemons, getPokemon, createPokemon: [upload.single('imagem'), createPokemon] };