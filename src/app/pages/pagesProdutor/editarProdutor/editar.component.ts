import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtores } from '../../../Models/Produtores';
import { ProdutorService } from '../../../services/produtor.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit{
  btnAcao: string = "Editar"
  btnTitulo: string = "Editar Produtor"
  produtor!: Produtores;

  constructor(private produtoresService : ProdutorService , private route: ActivatedRoute , private router: Router){

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.produtoresService.GetProdutor(id).subscribe((data) => {
      this.produtor = data.dados;
    })
  }

  editarProdutor(produtor: Produtores){
    this.produtoresService.EditarProdutor(produtor).subscribe((data)=> {
      this.router.navigate(['/produtor'])
    })
  }
}
