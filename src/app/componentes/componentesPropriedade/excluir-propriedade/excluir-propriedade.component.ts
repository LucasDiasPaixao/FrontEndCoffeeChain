import { Component, Inject, OnInit } from '@angular/core';
import { Propriedade } from '../../../Models/Propriedade';
import { PropriedadeService } from '../../../services/propriedade.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-excluir-propriedade',
  templateUrl: './excluir-propriedade.component.html',
  styleUrl: './excluir-propriedade.component.css'
})
export class ExcluirPropriedadeComponent implements OnInit{
  inputData: any;
  propriedade!: Propriedade;

  constructor(
    private propriedadeService: PropriedadeService,
    private Router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<ExcluirPropriedadeComponent>
  ){}

  ngOnInit(): void {
    this.inputData = this.data;

    this.propriedadeService.GetPropriedade(this.inputData.id).subscribe((propriedade) => {
      this.propriedade = propriedade.dados;
    });
  }

  Excluir(){
    this.propriedadeService.ExcluirPropriedade(this.inputData.id).subscribe((data) => {
      this.ref.close();
      window.location.reload();
    })
  }

  Cancelar(){
    this.ref.close();
  }
}