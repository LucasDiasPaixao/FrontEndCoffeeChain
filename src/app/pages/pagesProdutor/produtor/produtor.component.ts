import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Produtores } from '../../../Models/Produtores';
import { ProdutorService } from '../../../services/produtor.service';
import { ExcluirComponent } from '../../../componentes/componentesProdutor/excluirProdutor/excluir.component';

@Component({
  selector: 'app-produtor',
  templateUrl: './produtor.component.html',
  styleUrl: './produtor.component.css'
})
export class ProdutorComponent implements OnInit{

  panelOpenState = false;
  produtor: Produtores[] = [];
  produtorGeral: Produtores[] = [];
  colunas = ['Imagem','produtorId','Nome','Telefone','Cidade','Uf','Email','Acoes','Excluir']

  constructor (private produtorService: ProdutorService , public dialog: MatDialog) {}

  ngOnInit(): void {
    this.produtorService.GetProdutores().subscribe(data => {
      const dados = data.dados;

      dados.map((item) => {
      })

      this.produtor = data.dados;
      this.produtorGeral = data.dados;
  });
  }

  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.produtor = this.produtorGeral.filter(produtor => {
      return produtor.nomeProdutor.toLowerCase().includes(value);
    })
  }

  openDialog(id : Number) {
      this.dialog.open(ExcluirComponent, {
        width: '450px',
        height: '450px',
        data: {
          id: id
        }
      });
  }

}
