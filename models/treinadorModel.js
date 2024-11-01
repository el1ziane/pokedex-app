const treinador = [
    { id: 1, nomeTreinador: 'Ash', listaPokemon: [1, 4] },
    { id: 2, nomeTreinador: 'Misty', listaPokemon: [7, 1] },
];

const getTreinador = () => treinador;

const getTreinadorById = (id) => treinador.find(t => t.id === id);

const createPokemonTreinador = (nomeTreinador, listaPokemonIds) => {
    treinador.push({
        id: treinador.length + 1,
        nomeTreinador,
        listaPokemon: listaPokemonIds,
    });
};

module.exports = { getTreinador, getTreinadorById, createPokemonTreinador };
