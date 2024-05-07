import { Component, Inject, OnInit } from '@angular/core';
import { ProdutorService } from '../../../services/produtor.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Produtores } from '../../../Models/Produtores';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrl: './excluir.component.css'
})
export class ExcluirComponent implements OnInit{
  inputData: any;
  produtor!: Produtores;

  constructor(
    private ProdutorService: ProdutorService,
    private Router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<ExcluirComponent>
  ){}

  ngOnInit(): void {
    this.inputData = this.data;

    this.ProdutorService.GetProdutor(this.inputData.id).subscribe((produtor) => {
      this.produtor = produtor.dados;
    });
  }

  Excluir(){
    this.ProdutorService.ExcluirProdutor(this.inputData.id).subscribe((data) => {
      this.ref.close();
      window.location.reload();
    })
  }

  Cancelar(){
    this.ref.close();
  }
}
