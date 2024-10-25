const express = require('express');
const bodyParser = require('body-parser');
const pokemonRoutes = require('./routes/pokemon');
const treinadorRoutes = require('./routes/treinador');

const app = express();
app.set('view engine', 'ejs'); // Correção aqui
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', pokemonRoutes);
app.use('/', treinadorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
