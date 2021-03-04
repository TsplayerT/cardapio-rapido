import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { routerOpcao }  from './entity/opcao/opcao.router'
import { routerCategoria } from './entity/categoria/categoria.router'

const numeroPorta = 4201;
const app = express().use(cors()).use(bodyParser.json()).use(routerOpcao).use(routerCategoria);

app.listen(numeroPorta, () => console.log(`Back-end rodando na porta: ${numeroPorta}`));
