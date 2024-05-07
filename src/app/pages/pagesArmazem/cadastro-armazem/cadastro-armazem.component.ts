import { Component } from '@angular/core';
import { ArmazemService } from '../../../services/armazem.service';
import { Router } from '@angular/router';
import { Armazem } from '../../../Models/Armazem';

@Component({
  selector: 'app-cadastro-armazem',
  templateUrl: './cadastro-armazem.component.html',
  styleUrl: './cadastro-armazem.component.css'
})
export class CadastroArmazemComponent {
  btnAcao = "Cadastrar"
  btnTitulo = "Cadastrar novo Armazém"

  constructor(private armazemService: ArmazemService, private router: Router){

  }

  createArmazem(armazem: Armazem){
    this.armazemService.CreateArmazem(armazem).subscribe((data) => {
      this.router.navigate(['/armazem'])
    });
  }
}
