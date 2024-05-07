import { Component } from '@angular/core';
import { EntradaService } from '../../../services/entrada.service';
import { Router } from '@angular/router';
import { Entrada } from '../../../Models/Entrada';

@Component({
  selector: 'app-cadastro-entrada',
  templateUrl: './cadastro-entrada.component.html',
  styleUrl: './cadastro-entrada.component.css'
})
export class CadastroEntradaComponent {

  btnAcao = "Cadastrar"
  btnTitulo = "Cadastrar nova Entrada"

  constructor(private entradaService: EntradaService, private router: Router){

  }

  createEntrada(entrada: Entrada){
    this.entradaService.CreateEntrada(entrada).subscribe((data) => {
      this.router.navigate(['/entrada'])
    });
  }
}