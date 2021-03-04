import { Categoria } from './categoria.model';
import { NextFunction, Request, Response, Router } from 'express';
import { pegarRepositorio } from '../../repository';

export const routerCategoria: Router = Router();

routerCategoria.get('/listar/categoria', async function (req: Request, res: Response, next: NextFunction)
{
    try
    {
        let repositorio = await pegarRepositorio<Categoria>(Categoria);
        let todasCategorias = await repositorio.find();

        res.send(todasCategorias);
    }
    catch (erro)
    {
        return next(erro);
    }
});

routerCategoria.get('/pegar/categoria/:id', async function (req: Request, res: Response, next: NextFunction)
{
    try
    {
        let repositorio = await pegarRepositorio<Categoria>(Categoria);
        let categoria = await repositorio.find({id: Number(req.params.id)});

        res.send(categoria);
    }
    catch (erro)
    {
        return next(erro);
    }
});

routerCategoria.put('/adicionar/categoria', async function (req: Request, res: Response, next: NextFunction)
{
    try
    {
        let repositorio = await pegarRepositorio<Categoria>(Categoria);
        let categoria = new Categoria();

        categoria.nome = req.body.nome;

        const resultado = await repositorio.save(categoria);
        
        res.send(resultado);
    }
    catch (erro)
    {
        return next(erro);
    }
});

routerCategoria.post('/atualizar/categoria/:id', async function (req: Request, res: Response, next: NextFunction)
{
    try
    {
        let repositorio = await pegarRepositorio<Categoria>(Categoria);
        let categoria = await repositorio.findOne({id: Number(req.params.id)});

        categoria.nome = req.body.nome;

        let resultado = await repositorio.save(categoria);

        res.send(resultado);
    }
    catch (erro)
    {
        return next(erro);
    }
});

routerCategoria.delete('/apagar/categoria/:id', async function (req: Request, res: Response, next: NextFunction)
{
    try
    {
        let repositorio = await pegarRepositorio<Categoria>(Categoria);
        
        await repositorio.delete({id: Number(req.params.id)});

        res.send('OK');
    }
    catch (erro)
    {
        return next(erro);
    }
});
