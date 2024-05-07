import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Empresa } from '../../../Models/Empresa';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrl: './empresa-form.component.css'
})
export class EmpresaFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Empresa>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosEmpresa: Empresa | null = null;
  
  empresaForm!: FormGroup;

  constructor(){ }

  ngOnInit(): void {
    
    this.empresaForm = new FormGroup({
      empresaId: new FormControl(this.dadosEmpresa ? this.dadosEmpresa.empresaId : 0),
      razaoSocial: new FormControl(this.dadosEmpresa ? this.dadosEmpresa.razaoSocial : '', [Validators.required]),
      nomeFantasia: new FormControl(this.dadosEmpresa ? this.dadosEmpresa.nomeFantasia : ''),
      cnpjEmpresa: new FormControl(this.dadosEmpresa ? this.dadosEmpresa.cnpjEmpresa : '', [Validators.required]),
      telefoneEmpresa: new FormControl(this.dadosEmpresa ? this.dadosEmpresa.telefoneEmpresa : ''),
      enderecoEmpresa: new FormControl(this.dadosEmpresa ? this.dadosEmpresa.enderecoEmpresa : ''),
      cidadeEmpresa: new FormControl(this.dadosEmpresa ? this.dadosEmpresa.cidadeEmpresa : '', [Validators.required]),
      ufEmpresa: new FormControl(this.dadosEmpresa ? this.dadosEmpresa.ufEmpresa : '', [Validators.required]),
      paisEmpresa: new FormControl(this.dadosEmpresa ? this.dadosEmpresa.paisEmpresa : ''),
      cepEmpresa: new FormControl(this.dadosEmpresa ? this.dadosEmpresa.cepEmpresa : ''),
      emailEmpresa: new FormControl(this.dadosEmpresa ? this.dadosEmpresa.emailEmpresa : ''),
    });
  }

  submit(){
    this.onSubmit.emit(this.empresaForm.value);
  }
}