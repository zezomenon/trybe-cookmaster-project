const express = require('express');
const path = require('path');
const { 
  registerUserRoute,
  loginRoute,
  recipesRoute,
  getRecipesRoute,
  getRecipeByIdRoute,
 } = require('./src/routes');

const app = express();

app.use('/images', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());

const PORT = 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/users', registerUserRoute);
app.use('/login', loginRoute);
app.use('/recipes', recipesRoute);
app.use('/recipes', getRecipesRoute);
app.use('/recipes', getRecipeByIdRoute);

app.listen(PORT, () => { console.log('API rodando na porta 3000'); });