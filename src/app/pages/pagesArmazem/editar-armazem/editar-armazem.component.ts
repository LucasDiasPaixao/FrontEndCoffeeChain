import { Component } from '@angular/core';
import { Armazem } from '../../../Models/Armazem';
import { ArmazemService } from '../../../services/armazem.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-armazem',
  templateUrl: './editar-armazem.component.html',
  styleUrl: './editar-armazem.component.css'
})
export class EditarArmazemComponent {
  btnAcao: string = "Editar"
  btnTitulo: string = "Editar propriedade"
  armazem!: Armazem;

  constructor(private armazemService : ArmazemService , private route: ActivatedRoute , private router: Router){

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.armazemService.GetArmazem(id).subscribe((data) => {
      this.armazem = data.dados;
    })
  }

  editarArmazem(armazem: Armazem){
    this.armazemService.EditarArmazem(armazem).subscribe((data)=> {
      this.router.navigate(['/armazem'])
    })
  }
}
