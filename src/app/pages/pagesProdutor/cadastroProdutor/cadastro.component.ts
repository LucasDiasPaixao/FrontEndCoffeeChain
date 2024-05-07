import { Component } from '@angular/core';
import { Produtores } from '../../../Models/Produtores';
import { ProdutorService } from '../../../services/produtor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  btnAcao = "Cadastrar"
  btnTitulo = "Cadastrar novo Produtor"

  constructor(private produtorService: ProdutorService, private router: Router){

  }

  createProdutor(produtor: Produtores){
    this.produtorService.CreateProdutor(produtor).subscribe((data) => {
      this.router.navigate(['/produtor'])
    });
  }
}
