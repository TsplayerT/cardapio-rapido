import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("opcao")
export class Opcao
{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({nullable: false})
    nome: string;
    
    @Column()
    preco: number;
    
    @Column()
    imagem: string;
    
    @Column()
    descricao: string;
    
    @Column()
    detalhes: string;
}
