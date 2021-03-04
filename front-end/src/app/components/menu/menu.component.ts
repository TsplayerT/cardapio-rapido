import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

import { Opcao } from '../../entity/opcao';
import { Categoria } from '../../entity/categoria';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit
{
    opcoes: Opcao[];
    categorias: Categoria[];

    constructor(private dataService: DataService) 
    {
    }

    async ngOnInit()
    {
        this.opcoes = await this.dataService.listar("opcao");
        this.categorias = await this.dataService.listar("categoria");
    }

}
