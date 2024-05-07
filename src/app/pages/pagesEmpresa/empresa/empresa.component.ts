import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../../Models/Empresa';
import { EmpresaService } from '../../../services/empresa.service';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirEmpresaComponent } from '../../../componentes/componentesEmpresa/excluir-empresa/excluir-empresa.component';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrl: './empresa.component.css'
})
export class EmpresaComponent implements OnInit{
  
  panelOpenState = false;
  empresa: Empresa[] = [];
  empresaGeral: Empresa[] = [];
  colunas = ['Imagem','empresaId','RazaoSocial','CidadeEmpresa','UfEmpresa','EmailEmpresa','AcoesEmpresa','ExcluirEmpresa']

  constructor (private empresaService: EmpresaService , public dialog: MatDialog) {}

  ngOnInit(): void {
    this.empresaService.GetEmpresas().subscribe(data => {
      const dados = data.dados;

      dados.map((item) => {
      })

      this.empresa = data.dados;
      this.empresaGeral = data.dados;
  });
  }

  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.empresa = this.empresaGeral.filter(empresa => {
      return empresa.razaoSocial.toLowerCase().includes(value);
    })
  }

  openDialog(id : Number) {
      this.dialog.open(ExcluirEmpresaComponent, {
        width: '450px',
        height: '450px',
        data: {
          id: id
        }
      });
  }

}
