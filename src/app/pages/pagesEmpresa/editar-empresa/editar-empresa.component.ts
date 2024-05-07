import { Component } from '@angular/core';
import { Empresa } from '../../../Models/Empresa';
import { EmpresaService } from '../../../services/empresa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrl: './editar-empresa.component.css'
})
export class EditarEmpresaComponent {
  btnAcao: string = "Editar"
  btnTitulo: string = "Editar Empresa"
  empresa!: Empresa;

  constructor(private empresaService : EmpresaService , private route: ActivatedRoute , private router: Router){

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.empresaService.GetEmpresa(id).subscribe((data) => {
      this.empresa = data.dados;
    })
  }

  editarEmpresa(empresa: Empresa){
    this.empresaService.EditarEmpresa(empresa).subscribe((data)=> {
      this.router.navigate(['/empresa'])
    })
  }
}
