export interface Opcao {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  disponivel?: boolean;
  imagemUrl?: string;
  igridientes?: string[];
  quantidade?: number;
}
