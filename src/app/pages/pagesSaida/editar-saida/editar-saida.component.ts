import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SaidaService } from '../../../services/saida.service';
import { Saida } from '../../../Models/Saida';

@Component({
  selector: 'app-editar-saida',
  templateUrl: './editar-saida.component.html',
  styleUrl: './editar-saida.component.css'
})
export class EditarSaidaComponent {
  btnAcao: string = "Editar"
  btnTitulo: string = "Editar Saída"
  saida!: Saida;

  constructor(private saidaService : SaidaService , private route: ActivatedRoute , private router: Router){

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.saidaService.GetSaida(id).subscribe((data) => {
      this.saida = data.dados;
    })
  }

  editarEntrada(saida: Saida){
    this.saidaService.EditarSaida(saida).subscribe((data)=> {
      this.router.navigate(['/saida'])
    })
  }
}