import { Component, OnInit } from '@angular/core';
import { Entrada } from '../../../Models/Entrada';
import { EntradaService } from '../../../services/entrada.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArmazemService } from '../../../services/armazem.service';
import { EmpresaService } from '../../../services/empresa.service';
import { PropriedadeService } from '../../../services/propriedade.service';
import { ProdutorService } from '../../../services/produtor.service';
import { Empresa } from '../../../Models/Empresa';
import { Produtores } from '../../../Models/Produtores';
import { Propriedade } from '../../../Models/Propriedade';
import { Armazem } from '../../../Models/Armazem';

@Component({
  selector: 'app-detalhes-entrada',
  templateUrl: './detalhes-entrada.component.html',
  styleUrl: './detalhes-entrada.component.css'
})
export class DetalhesEntradaComponent implements OnInit{

  entrada? : Entrada;
  empresa! : Empresa;
  produtor! : Produtores;
  propriedade! : Propriedade;
  armazem! : Armazem;

  constructor(private entradaService: EntradaService, private route: ActivatedRoute, private router: Router, private produtorService: ProdutorService, private propriedadeService: PropriedadeService, private empresaService: EmpresaService, private armazemService: ArmazemService){ }
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.entradaService.GetEntrada(id).subscribe((data) => {
      this.entrada = data.dados;
      this.empresaService.GetEmpresa(this.entrada.empresaId).subscribe((data) => {
        this.empresa = data.dados;
      });
      this.produtorService.GetProdutor(this.entrada.produtorId).subscribe((data) => {
        this.produtor = data.dados;
      });
      this.propriedadeService.GetPropriedade(this.entrada.propriedadeId).subscribe((data) => {
        this.propriedade = data.dados;
      });
      this.armazemService.GetArmazem(this.entrada.armazemId).subscribe((data) => {
        this.armazem = data.dados;
      });
    });
}
}