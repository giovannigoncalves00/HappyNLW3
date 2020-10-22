import express from 'express';
import 'express-async-errors';
import path from 'path';
import cors from 'cors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

//mostrar a imagem


app.listen(3333);

//REQ / RES
//localhost:3333

//user - rota


// ROTA = CONJUNTO
// RECURSO = USUARIO

// MÉTODOS HTTP = get, post, put, delete
// PARÂMETROS

// Get= Buscar uma informação (Lista, item)
// Post= Criando uma informação
// Put= Editando uma informação
// Delete= Deletando uma informação

// Query Parsms: http://localhost:3333/users?search=giovanni
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body:  http:localhost:3333/

// console.log(request.query);
// console.log(request.params);
// console.log(request.body);