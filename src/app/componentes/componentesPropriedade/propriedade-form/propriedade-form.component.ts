import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Propriedade } from '../../../Models/Propriedade';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produtores } from '../../../Models/Produtores';
import { ProdutorService } from '../../../services/produtor.service';

@Component({
  selector: 'app-propriedade-form',
  templateUrl: './propriedade-form.component.html',
  styleUrl: './propriedade-form.component.css'
})
export class PropriedadeFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Propriedade>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosPorpriedade: Propriedade | null = null;
  produtores!: Produtores[];
  
  propriedadeForm!: FormGroup;

  constructor(private produtorService: ProdutorService){ }

  ngOnInit(): void {
    this.produtorService.GetProdutores().subscribe(data => {
      const dados = data.dados;

      dados.map((item) => {
      })

      this.produtores = data.dados;
  });   
    
    this.propriedadeForm = new FormGroup({
      propriedadeId: new FormControl(this.dadosPorpriedade ? this.dadosPorpriedade.propriedadeId : 0),
      produtorId: new FormControl(this.dadosPorpriedade ? this.dadosPorpriedade.produtorId : '', [Validators.required]),
      nomeFazenda: new FormControl(this.dadosPorpriedade ? this.dadosPorpriedade.nomeFazenda : '', [Validators.required]),
      cnpjFazenda: new FormControl(this.dadosPorpriedade ? this.dadosPorpriedade.cnpjFazenda : '', [Validators.required]),
      inscEstadual: new FormControl(this.dadosPorpriedade ? this.dadosPorpriedade.inscEstadual : ''),
      telefonePropriedade: new FormControl(this.dadosPorpriedade ? this.dadosPorpriedade.telefonePropriedade : ''),
      enderecoPropriedade: new FormControl(this.dadosPorpriedade ? this.dadosPorpriedade.enderecoPropriedade : '', [Validators.required]),
      cidadePropriedade: new FormControl(this.dadosPorpriedade ? this.dadosPorpriedade.cidadePropriedade : ''),
      ufPropriedade: new FormControl(this.dadosPorpriedade ? this.dadosPorpriedade.ufPropriedade : '', [Validators.required]),
      emailPropriedade: new FormControl(this.dadosPorpriedade ? this.dadosPorpriedade.emailPropriedade : ''),
      cepPropriedade: new FormControl(this.dadosPorpriedade ? this.dadosPorpriedade.cepPropriedade : ''),
    });
  }

  submit(){
    this.onSubmit.emit(this.propriedadeForm.value);
  }
}