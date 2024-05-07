import { Component, OnInit } from '@angular/core';
import { Saida } from '../../../Models/Saida';
import { SaidaService } from '../../../services/saida.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutorService } from '../../../services/produtor.service';
import { PropriedadeService } from '../../../services/propriedade.service';
import { EmpresaService } from '../../../services/empresa.service';
import { EntradaService } from '../../../services/entrada.service';
import { Armazem } from '../../../Models/Armazem';
import { Empresa } from '../../../Models/Empresa';
import { Entrada } from '../../../Models/Entrada';
import { Produtores } from '../../../Models/Produtores';
import { Propriedade } from '../../../Models/Propriedade';

@Component({
  selector: 'app-detalhes-saida',
  templateUrl: './detalhes-saida.component.html',
  styleUrl: './detalhes-saida.component.css'
})
export class DetalhesSaidaComponent implements OnInit{

  saida? : Saida;
  armazem!: Armazem;
  empresa!: Empresa;
  entrada!: Entrada;
  produtor!: Produtores;
  propriedade!: Propriedade;


  constructor(private saidaService: SaidaService, private route: ActivatedRoute, private router: Router, private produtorService: ProdutorService, private propriedadeService: PropriedadeService, private empresaService: EmpresaService, private entradaService: EntradaService){ }
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.saidaService.GetSaida(id).subscribe((data) => {
      this.saida = data.dados;
      this.empresaService.GetEmpresa(this.saida.destinoEmpresaId).subscribe((data) => {
        this.empresa = data.dados;
      });
      this.produtorService.GetProdutor(this.saida.destinoProdutorId).subscribe((data) => {
        this.produtor = data.dados;
      });
      this.propriedadeService.GetPropriedade(this.saida.destinoPropriedadeId).subscribe((data) => {
        this.propriedade = data.dados;
      });
      this.entradaService.GetEntrada(this.saida.entradaId).subscribe((data) => {
        this.entrada = data.dados;
      });
    });
}
}