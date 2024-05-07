import { Component, OnInit } from '@angular/core';
import { Propriedade } from '../../../Models/Propriedade';
import { PropriedadeService } from '../../../services/propriedade.service';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirPropriedadeComponent } from '../../../componentes/componentesPropriedade/excluir-propriedade/excluir-propriedade.component';
import { ProdutorService } from '../../../services/produtor.service';
import { Produtores } from '../../../Models/Produtores';

@Component({
  selector: 'app-propriedade',
  templateUrl: './propriedade.component.html',
  styleUrl: './propriedade.component.css'
})
export class PropriedadeComponent implements OnInit{

  panelOpenState = false;
  propriedade: Propriedade[] = [];
  propriedadeGeral: Propriedade[] = [];
  propriedades!: Propriedade;
  produtor!: Produtores;
  colunas = ['Imagem','propriedadeId','produtor','nomeFazenda','cnpjFazenda','ufPropriedade','telefonePropriedade','AcoesPropriedade','ExcluirPropriedade']

  constructor (private propriedadeService: PropriedadeService, public dialog: MatDialog, private produtorService: ProdutorService) {}

  ngOnInit(): void {
    this.propriedadeService.GetPropriedades().subscribe(data => {
      const dados = data.dados;

      dados.map((item) => {
      })

      this.propriedade = data.dados;
      this.propriedadeGeral = data.dados;
      
  });   
}

  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.propriedade = this.propriedadeGeral.filter(propriedade => {
      return propriedade.nomeFazenda.toLowerCase().includes(value);
    })
  }

  openDialog(id : Number) {
    this.dialog.open(ExcluirPropriedadeComponent, {
      width: '450px',
      height: '450px',
      data: {
        id: id
      }
    });
  }
}
