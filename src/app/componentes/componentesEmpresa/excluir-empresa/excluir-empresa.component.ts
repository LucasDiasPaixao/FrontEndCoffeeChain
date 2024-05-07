import { Component, Inject, OnInit } from '@angular/core';
import { EmpresaService } from '../../../services/empresa.service';
import { Empresa } from '../../../Models/Empresa';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-excluir-empresa',
  templateUrl: './excluir-empresa.component.html',
  styleUrl: './excluir-empresa.component.css'
})
export class ExcluirEmpresaComponent implements OnInit{
  inputData: any;
  empresa!: Empresa;

  constructor(
    private EmpresaService: EmpresaService,
    private Router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<ExcluirEmpresaComponent>
  ){}

  ngOnInit(): void {
    this.inputData = this.data;

    this.EmpresaService.GetEmpresa(this.inputData.id).subscribe((empresa) => {
      this.empresa = empresa.dados;
    });
  }

  Excluir(){
    this.EmpresaService.ExcluirEmpresa(this.inputData.id).subscribe((data) => {
      this.ref.close();
      window.location.reload();
    })
  }

  Cancelar(){
    this.ref.close();
  }
}
