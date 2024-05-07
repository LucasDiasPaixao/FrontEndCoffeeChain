import { Component, Inject, OnInit } from '@angular/core';
import { SaidaService } from '../../../services/saida.service';
import { Router } from '@angular/router';
import { Saida } from '../../../Models/Saida';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProdutorService } from '../../../services/produtor.service';
import { Produtores } from '../../../Models/Produtores';

@Component({
  selector: 'app-excluir-saida',
  templateUrl: './excluir-saida.component.html',
  styleUrl: './excluir-saida.component.css'
})
export class ExcluirSaidaComponent implements OnInit{
  inputData: any;
  saida!: Saida;
  produtor?: Produtores;

  constructor(
    private saidaService: SaidaService,
    private produtorService: ProdutorService,
    private Router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<ExcluirSaidaComponent>
  ){}

  ngOnInit(): void {
    this.inputData = this.data;

    this.saidaService.GetSaida(this.inputData.id).subscribe((Saida) => {
      this.saida = Saida.dados;
      const produtorId = this.saida.destinoProdutorId;
      this.produtorService.GetProdutor(produtorId).subscribe((data) => {
        this.produtor = data.dados;
      });
    });
  }

  Excluir(){
    this.saidaService.ExcluirSaida(this.inputData.id).subscribe((data) => {
      this.ref.close();
      window.location.reload();
    })
  }

  Cancelar(){
    this.ref.close();
  }
}