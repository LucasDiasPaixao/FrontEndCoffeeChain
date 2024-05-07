import { Component } from '@angular/core';
import { Propriedade } from '../../../Models/Propriedade';
import { PropriedadeService } from '../../../services/propriedade.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-propriedade',
  templateUrl: './editar-propriedade.component.html',
  styleUrl: './editar-propriedade.component.css'
})
export class EditarPropriedadeComponent {
  btnAcao: string = "Editar"
  btnTitulo: string = "Editar propriedade"
  propriedade!: Propriedade;

  constructor(private propriedadeService : PropriedadeService , private route: ActivatedRoute , private router: Router){

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.propriedadeService.GetPropriedade(id).subscribe((data) => {
      this.propriedade = data.dados;
    })
  }

  editarpropriedade(propriedade: Propriedade){
    this.propriedadeService.EditarPropriedade(propriedade).subscribe((data)=> {
      this.router.navigate(['/propriedade'])
    })
  }
}
