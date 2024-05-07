import { Component, OnInit } from '@angular/core';
import { Saida } from '../../../Models/Saida';
import { SaidaService } from '../../../services/saida.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-saida',
  templateUrl: './cadastro-saida.component.html',
  styleUrl: './cadastro-saida.component.css'
})
export class CadastroSaidaComponent {

  btnAcao = "Cadastrar"
  btnTitulo = "Cadastrar nova Saída"

  constructor(private saidaService: SaidaService, private router: Router){

  }

  createSaida(saida: Saida){
    this.saidaService.CreateSaida(saida).subscribe((data) => {
      this.router.navigate(['/saida'])
    });
  }
}