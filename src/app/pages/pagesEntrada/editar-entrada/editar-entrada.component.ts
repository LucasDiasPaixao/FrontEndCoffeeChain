import { Component } from '@angular/core';
import { Entrada } from '../../../Models/Entrada';
import { EntradaService } from '../../../services/entrada.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-entrada',
  templateUrl: './editar-entrada.component.html',
  styleUrl: './editar-entrada.component.css'
})
export class EditarEntradaComponent {
  btnAcao: string = "Editar"
  btnTitulo: string = "Editar entrada"
  entrada!: Entrada;

  constructor(private entradaService : EntradaService , private route: ActivatedRoute , private router: Router){

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.entradaService.GetEntrada(id).subscribe((data) => {
      this.entrada = data.dados;
    })
  }

  editarEntrada(entrada: Entrada){
    this.entradaService.EditarEntrada(entrada).subscribe((data)=> {
      this.router.navigate(['/entrada'])
    })
  }
}