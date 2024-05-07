import { Component, OnInit } from '@angular/core';
import { Saida } from '../../../Models/Saida';
import { MatDialog } from '@angular/material/dialog';
import { SaidaService } from '../../../services/saida.service';
import { ExcluirSaidaComponent } from '../../../componentes/componentesSaida/excluir-saida/excluir-saida.component';

@Component({
  selector: 'app-saida',
  templateUrl: './saida.component.html',
  styleUrl: './saida.component.css'
})
export class SaidaComponent implements OnInit{

  panelOpenState = false;
  saida: Saida[] = [];
  saidaGeral: Saida[] = [];
  

  colunas = ['Imagem','saidaId','propriedadeId','entradaId','dataSaida','tipoSaida','qtdSacas','AcoesSaida','ExcluirSaida']

  constructor (private saidaService: SaidaService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.saidaService.GetSaidas().subscribe(data => {
      const dados = data.dados;

      dados.map((item) => {
      })

      this.saida = data.dados;
      this.saidaGeral = data.dados;
  });   
}

  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.saida = this.saidaGeral.filter(saida => {
      return saida.saidaId.toString().includes(value);
    })
  }

  openDialog(id : Number) {
    this.dialog.open(ExcluirSaidaComponent, {
      width: '450px',
      height: '450px',
      data: {
        id: id
      }
    });
  }
}
