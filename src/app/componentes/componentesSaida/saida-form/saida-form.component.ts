import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Saida } from '../../../Models/Saida';
import { ProdutorService } from '../../../services/produtor.service';
import { Produtores } from '../../../Models/Produtores';
import { Propriedade } from '../../../Models/Propriedade';
import { PropriedadeService } from '../../../services/propriedade.service';
import { Empresa } from '../../../Models/Empresa';
import { Entrada } from '../../../Models/Entrada';
import { EmpresaService } from '../../../services/empresa.service';
import { EntradaService } from '../../../services/entrada.service';

@Component({
  selector: 'app-saida-form',
  templateUrl: './saida-form.component.html',
  styleUrl: './saida-form.component.css'
})
export class SaidaFormComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<Saida>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosSaida: Saida | null = null;
  saidaForm!: FormGroup;
  produtores!: Produtores[];
  propriedades!: Propriedade[];
  empresas!: Empresa[];
  entradas!: Entrada[];

  constructor(private produtorService: ProdutorService, private propriedadeService: PropriedadeService, private empresaService: EmpresaService, private entradaService: EntradaService){ }

  ngOnInit(): void {
    this.produtorService.GetProdutores().subscribe(data => {
      const dados = data.dados;

      dados.map((item) => {
      })

      this.produtores = data.dados;
  });   
  this.propriedadeService.GetPropriedades().subscribe(data => {
    const dados = data.dados;

    dados.map((item) => {
    })

    this.propriedades = data.dados;
});   
this.empresaService.GetEmpresas().subscribe(data => {
  const dados = data.dados;

  dados.map((item) => {
  })

  this.empresas = data.dados;
});  
this.entradaService.GetEntradas().subscribe(data => {
  const dados = data.dados;

  dados.map((item) => {
  })

  this.entradas = data.dados;
});  
    
    this.saidaForm = new FormGroup({
      saidaId: new FormControl(this.dadosSaida ? this.dadosSaida?.saidaId : 0),
      destinoProdutorId: new FormControl(this.dadosSaida ? this.dadosSaida?.destinoProdutorId : '', [Validators.required]),
      destinoPropriedadeId: new FormControl(this.dadosSaida ? this.dadosSaida.destinoPropriedadeId : '', [Validators.required]),
      destinoEmpresaId: new FormControl(this.dadosSaida ? this.dadosSaida.destinoEmpresaId : '', [Validators.required]),
      entradaId: new FormControl(this.dadosSaida ? this.dadosSaida?.entradaId : '', [Validators.required]),
      dataSaida: new FormControl(new Date()),
      qtdSacas: new FormControl(this.dadosSaida ? this.dadosSaida.qtdSacas : '', [Validators.required]),
      tipoSaida: new FormControl(this.dadosSaida ? this.dadosSaida.tipoSaida : '', [Validators.required]),
      precoSaida: new FormControl(this.dadosSaida ? this.dadosSaida.precoSaida : '', [Validators.required]),
      custoSaida: new FormControl(this.dadosSaida ? this.dadosSaida.custoSaida : '', [Validators.required]),
      nfeSaida: new FormControl(this.dadosSaida ? this.dadosSaida.nfeSaida : '', ),
      embalagemSaida: new FormControl(this.dadosSaida ? this.dadosSaida.embalagemSaida : '', ),
    });
  }

  submit(){
    this.onSubmit.emit(this.saidaForm.value);
  }
}