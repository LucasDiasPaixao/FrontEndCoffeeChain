import { Component, Inject, OnInit } from '@angular/core';
import { Armazem } from '../../../Models/Armazem';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ArmazemService } from '../../../services/armazem.service';
import { Empresa } from '../../../Models/Empresa';
import { EmpresaService } from '../../../services/empresa.service';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-excluir-armazem',
  templateUrl: './excluir-armazem.component.html',
  styleUrl: './excluir-armazem.component.css'
})
export class ExcluirArmazemComponent implements OnInit{
  inputData: any;
  armazem!: Armazem;

  constructor(
    private armazemService: ArmazemService,
    private Router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<ExcluirArmazemComponent>
  ){}

  ngOnInit(): void {
    this.inputData = this.data;

    this.armazemService.GetArmazem(this.inputData.id).subscribe((armazem) => {
      this.armazem = armazem.dados;
    });
  }

  Excluir(){
    this.armazemService.ExcluirArmazem(this.inputData.id).subscribe((data) => {
      this.ref.close();
      window.location.reload();
    })
  }

  Cancelar(){
    this.ref.close();
  }
}
