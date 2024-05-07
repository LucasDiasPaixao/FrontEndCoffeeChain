import { Component } from '@angular/core';
import { PropriedadeService } from '../../../services/propriedade.service';
import { Propriedade } from '../../../Models/Propriedade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-propriedade',
  templateUrl: './cadastro-propriedade.component.html',
  styleUrl: './cadastro-propriedade.component.css'
})
export class CadastroPropriedadeComponent {

  btnAcao = "Cadastrar"
  btnTitulo = "Cadastrar nova Propriedade"

  constructor(private propriedadeService: PropriedadeService, private router: Router){

  }

  createPropriedade(propriedade: Propriedade){
    this.propriedadeService.CreatePropriedade(propriedade).subscribe((data) => {
      this.router.navigate(['/propriedade'])
    });
  }
}