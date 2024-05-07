import { Component, OnInit } from '@angular/core';
import { Armazem } from '../../../Models/Armazem';
import { ArmazemService } from '../../../services/armazem.service';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirArmazemComponent } from '../../../componentes/componentesArmazem/excluir-armazem/excluir-armazem.component';

@Component({
  selector: 'app-armazem',
  templateUrl: './armazem.component.html',
  styleUrl: './armazem.component.css'
})
export class ArmazemComponent implements OnInit{

  panelOpenState = false;
  armazem: Armazem[] = [];
  armazemGeral: Armazem[] = [];

  colunas = ['Imagem','armazemId','telefoneArmazem','empresa','ufArmazem','AcoesArmazem','ExcluirArmazem']

  constructor (private armazemService: ArmazemService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.armazemService.GetArmazens().subscribe(data => {
      const dados = data.dados;

      dados.map((item) => {
      })

      this.armazem = data.dados;
      this.armazemGeral = data.dados;
  });   
}

  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.armazem = this.armazemGeral.filter(armazem => {
      return armazem.telefoneArmazem?.toLowerCase().includes(value);
    })
  }

  openDialog(id : Number) {
    this.dialog.open(ExcluirArmazemComponent, {
      width: '450px',
      height: '450px',
      data: {
        id: id
      }
    });
}
}
