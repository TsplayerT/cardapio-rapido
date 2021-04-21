export class Opcao {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  disponivel?: boolean;
  imagemUrl?: string;
  ingridientes?: string[];
  quantidade?: number;
}
