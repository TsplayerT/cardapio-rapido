import { Entidade } from './entity/entidade';
import { createConnection, Connection, Repository } from 'typeorm';

let conexao: Connection;

export async function pegarRepositorio<T extends Entidade>(entidade: any): Promise<Repository<T>>
{
    if (conexao === undefined)
    {
        conexao = await createConnection();
    }

    return conexao.getRepository(entidade);
}