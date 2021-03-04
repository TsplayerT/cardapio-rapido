import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { Entidade } from "../entidade";

@Entity("categoria")
export class Categoria implements Entidade
{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({nullable: false})
    nome: string;
}