import { Component, OnInit } from '@angular/core';
import { Entrada } from '../../../Models/Entrada';
import { EntradaService } from '../../../services/entrada.service';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirEntradaComponent } from '../../../componentes/componentesEntrada/excluir-entrada/excluir-entrada.component';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrl: './entrada.component.css'
})
export class EntradaComponent implements OnInit{

  panelOpenState = false;
  entrada: Entrada[] = [];
  entradaGeral: Entrada[] = [];

  colunas = ['Imagem','entradaId','propriedadeId','armazemId','dataEntrada','codigoLote','qtdSacas','AcoesEntrada','ExcluirEntrada']

  constructor (private entradaService: EntradaService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.entradaService.GetEntradas().subscribe(data => {
      const dados = data.dados;

      dados.map((item) => {
      })

      this.entrada = data.dados;
      this.entradaGeral = data.dados;
  });   
}

  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.entrada = this.entradaGeral.filter(entrada => {
      return entrada.codigoLote.toLowerCase().includes(value);
    })
  }

  openDialog(id : Number) {
    this.dialog.open(ExcluirEntradaComponent, {
      width: '450px',
      height: '450px',
      data: {
        id: id
      }
    });
  }
}
