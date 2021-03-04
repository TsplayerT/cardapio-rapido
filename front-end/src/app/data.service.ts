import { Injectable }from "@angular/core"; 
import { HttpClient }from '@angular/common/http'; 

const baseUrl = 'http://localhost:4201';

@Injectable(
{
  providedIn:'root'
})
export class DataService
{
    constructor(private http: HttpClient)
    {
    }

    private async requisicao(metodo: string, url: string, dados?: any)
    {
        let resultado = this.http.request(metodo, url, 
        {
            body: dados, 
            responseType: 'json', 
            observe: 'body', 
        }); 

        console.log("requisição (" + metodo.toUpperCase() + ")");
        console.log('url: ' + url); 
        console.log('resposta: ' + JSON.stringify(dados)); 
        
        return new Promise<any>((resolve, reject) => resultado.subscribe(resolve as any, reject as any)); 
    }

    public listar = (entidade: string) => this.requisicao('get', `${baseUrl}/listar/${entidade}`); 
    public pegar = (entidade: string, id: string) => this.requisicao('get', `${baseUrl}/pegar/${entidade}/${id}`); 
    public adicionar = (entidade: string, objeto: any) => this.requisicao('post', `${baseUrl}/adicionar/${entidade}`, objeto); 
    public atualizar = (entidade: string, objeto: any) => this.requisicao('post', `${baseUrl}/atualizar/${entidade}/${objeto.id}`, objeto); 
    public apagar = (entidade: string, id: string) => this.requisicao('delete', `${baseUrl}/apagar/${entidade}/${id}`);

}
