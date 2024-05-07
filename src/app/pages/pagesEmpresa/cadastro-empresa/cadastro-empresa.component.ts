import { Component } from '@angular/core';
import { EmpresaService } from '../../../services/empresa.service';
import { Router } from '@angular/router';
import { Empresa } from '../../../Models/Empresa';

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrl: './cadastro-empresa.component.css'
})
export class CadastroEmpresaComponent {

  btnAcao = "Cadastrar"
  btnTitulo = "Cadastrar nova Empresa"

  constructor(private empresaService: EmpresaService, private router: Router){

  }

  createEmpresa(empresa: Empresa){
    this.empresaService.CreateEmpresa(empresa).subscribe((data) => {
      this.router.navigate(['/empresa'])
    });
  }
}
