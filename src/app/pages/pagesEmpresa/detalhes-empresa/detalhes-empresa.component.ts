import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../../Models/Empresa';
import { EmpresaService } from '../../../services/empresa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-empresa',
  templateUrl: './detalhes-empresa.component.html',
  styleUrl: './detalhes-empresa.component.css'
})
export class DetalhesEmpresaComponent implements OnInit{

  empresa? : Empresa;

  constructor(private empresaService: EmpresaService, private route: ActivatedRoute, private router: Router){ }
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.empresaService.GetEmpresa(id).subscribe((data) => {
      this.empresa = data.dados;
    })
  }
}
