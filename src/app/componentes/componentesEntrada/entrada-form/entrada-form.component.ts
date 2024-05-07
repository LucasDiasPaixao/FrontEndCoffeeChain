import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Entrada } from '../../../Models/Entrada';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArmazemService } from '../../../services/armazem.service';
import { EmpresaService } from '../../../services/empresa.service';
import { PropriedadeService } from '../../../services/propriedade.service';
import { ProdutorService } from '../../../services/produtor.service';
import { Produtores } from '../../../Models/Produtores';
import { Propriedade } from '../../../Models/Propriedade';
import { Empresa } from '../../../Models/Empresa';
import { Armazem } from '../../../Models/Armazem';

@Component({
  selector: 'app-entrada-form',
  templateUrl: './entrada-form.component.html',
  styleUrl: './entrada-form.component.css',
})
export class EntradaFormComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<Entrada>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosEntrada: Entrada | null = null;
  entradaForm!: FormGroup;
  produtores!: Produtores[];
  propriedades!: Propriedade[];
  empresas!: Empresa[];
  armazens!: Armazem[];
  armazem!: Armazem;

  constructor(private produtorService: ProdutorService, private propriedadeService: PropriedadeService, private empresaService: EmpresaService, private armazemService: ArmazemService){ }

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
this.armazemService.GetArmazens().subscribe(data => {
  const dados = data.dados;

  dados.map((item) => {
  })

  this.armazens = data.dados;
}); 
    
    this.entradaForm = new FormGroup({
      entradaId: new FormControl(this.dadosEntrada ? this.dadosEntrada?.entradaId : 0),
      produtorId: new FormControl(this.dadosEntrada ? this.dadosEntrada?.produtorId : '', [Validators.required]),
      propriedadeId: new FormControl(this.dadosEntrada ? this.dadosEntrada.propriedadeId : '', [Validators.required]),
      empresaId: new FormControl(this.dadosEntrada ? this.dadosEntrada.empresaId : '', [Validators.required]),
      armazemId: new FormControl(this.dadosEntrada ? this.dadosEntrada?.armazemId : '', [Validators.required]),
      dataEntrada: new FormControl(new Date()),
      codigoLote: new FormControl(this.dadosEntrada ? this.dadosEntrada.codigoLote : '', [Validators.required]),
      qtdSacas: new FormControl(this.dadosEntrada ? this.dadosEntrada.qtdSacas : '', [Validators.required]),
      precoLote: new FormControl(this.dadosEntrada ? this.dadosEntrada.precoLote : '', [Validators.required]),
      custoEntrada: new FormControl(this.dadosEntrada ? this.dadosEntrada.custoEntrada : '', [Validators.required]),
      nfeEntrada: new FormControl(this.dadosEntrada ? this.dadosEntrada.nfeEntrada : '', ),
      tipoEntrada: new FormControl(this.dadosEntrada ? this.dadosEntrada.tipoEntrada : '', [Validators.required]),
      safra: new FormControl(this.dadosEntrada ? this.dadosEntrada.safra : '',),
      tipoCafe: new FormControl(this.dadosEntrada ? this.dadosEntrada.tipoCafe : '',),
      localArmazenado: new FormControl(this.dadosEntrada ? this.dadosEntrada.localArmazenado : '', [Validators.required]),
      embalagemArmazenado: new FormControl(this.dadosEntrada ? this.dadosEntrada.embalagemArmazenado : '', [Validators.required]),
    });
  }

  submit(){
    this.onSubmit.emit(this.entradaForm.value);
  }
}