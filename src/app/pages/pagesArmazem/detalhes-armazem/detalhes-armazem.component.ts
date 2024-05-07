import { Component, OnInit } from '@angular/core';
import { Armazem } from '../../../Models/Armazem';
import { Empresa } from '../../../Models/Empresa';
import { ArmazemService } from '../../../services/armazem.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaService } from '../../../services/empresa.service';

@Component({
  selector: 'app-detalhes-armazem',
  templateUrl: './detalhes-armazem.component.html',
  styleUrl: './detalhes-armazem.component.css'
})
export class DetalhesArmazemComponent implements OnInit{

  armazem? : Armazem;
  empresa!: Empresa;

  constructor(private armazemService: ArmazemService, private route: ActivatedRoute, private router: Router, private empresaService : EmpresaService){ }
  
  ngOnInit(): void {
     

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.armazemService.GetArmazem(id).subscribe((data) => {
      this.armazem = data.dados;
      this.empresaService.GetEmpresa(this.armazem.empresaId).subscribe((data) => {
        this.empresa = data.dados;
      });
    });
}
}
