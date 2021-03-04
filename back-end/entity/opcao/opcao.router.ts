import { Opcao } from './opcao.model';
import { NextFunction, Request, Response, Router } from 'express';
import { pegarRepositorio } from '../../repository';

export const routerOpcao: Router = Router();

routerOpcao.get('/listar/opcao', async function (req: Request, res: Response, next: NextFunction)
{
    try
    {
        let repositorio = await pegarRepositorio<Opcao>(Opcao);
        let todasOpcoes = await repositorio.find();

        res.send(todasOpcoes);
    }
    catch (erro)
    {
        return next(erro);
    }
});

routerOpcao.get('/pegar/opcao/:id', async function (req: Request, res: Response, next: NextFunction)
{
    try
    {
        let repositorio = await pegarRepositorio<Opcao>(Opcao);
        let opcao = await repositorio.find({id: Number(req.params.id)});

        res.send(opcao);
    }
    catch (erro)
    {
        return next(erro);
    }
});

routerOpcao.put('/adicionar/opcao', async function (req: Request, res: Response, next: NextFunction)
{
    try
    {
        let repositorio = await pegarRepositorio<Opcao>(Opcao);
        let opcao = new Opcao();

        opcao.nome = req.body.nome;
        opcao.descricao = req.body.descricao;
        opcao.preco = Number.parseFloat(req.body.preco);

        let result = await repositorio.save(opcao);
        
        res.send(result);
    }
    catch (erro)
    {
        return next(erro);
    }
});

routerOpcao.post('/atualizar/opcao/:id', async function (req: Request, res: Response, next: NextFunction)
{
    try
    {
        let repositorio = await pegarRepositorio<Opcao>(Opcao);
        let opcao = await repositorio.findOne({id: Number(req.params.id)});

        opcao.nome = req.body.nome;
        opcao.descricao = req.body.descricao;
        opcao.preco = Number.parseFloat(req.body.preco);

        const result = await repositorio.save(opcao);

        res.send(result);
    }
    catch (erro)
    {
        return next(erro);
    }
});

routerOpcao.delete('/apagar/opcao/:id', async function (req: Request, res: Response, next: NextFunction)
{
    try
    {
        let repositorio = await pegarRepositorio<Opcao>(Opcao);

        await repositorio.delete({id: Number(req.params.id)});

        res.send('OK');
    }
    catch (erro)
    {
        return next(erro);
    }
});
