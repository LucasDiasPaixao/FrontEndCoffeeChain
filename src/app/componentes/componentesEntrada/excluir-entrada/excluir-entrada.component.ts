import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntradaService } from '../../../services/entrada.service';
import { Entrada } from '../../../Models/Entrada';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-excluir-entrada',
  templateUrl: './excluir-entrada.component.html',
  styleUrl: './excluir-entrada.component.css'
})
export class ExcluirEntradaComponent implements OnInit{
  inputData: any;
  entrada!: Entrada;

  constructor(
    private entradaService: EntradaService,
    private Router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<ExcluirEntradaComponent>
  ){}

  ngOnInit(): void {
    this.inputData = this.data;

    this.entradaService.GetEntrada(this.inputData.id).subscribe((Entrada) => {
      this.entrada = Entrada.dados;
    });
  }

  Excluir(){
    this.entradaService.ExcluirEntrada(this.inputData.id).subscribe((data) => {
      this.ref.close();
      window.location.reload();
    })
  }

  Cancelar(){
    this.ref.close();
  }
}