import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Armazem } from '../../../Models/Armazem';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpresaService } from '../../../services/empresa.service';
import { Empresa } from '../../../Models/Empresa';

@Component({
  selector: 'app-armazem-form',
  templateUrl: './armazem-form.component.html',
  styleUrl: './armazem-form.component.css'
})
export class ArmazemFormComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<Armazem>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosArmazem: Armazem | null = null;
  empresas!: Empresa[]; 
  armazemForm!: FormGroup;

  constructor(private empresaService : EmpresaService){ }

  ngOnInit(): void {
    this.empresaService.GetEmpresas().subscribe(data => {
      const dados = data.dados;

      dados.map((item) => {
      })

      this.empresas = data.dados;
    }); 

    this.armazemForm = new FormGroup({
      armazemId: new FormControl(this.dadosArmazem ? this.dadosArmazem.armazemId : 0),
      empresaId: new FormControl(this.dadosArmazem ? this.dadosArmazem?.empresaId : '', [Validators.required]),
      telefoneArmazem: new FormControl(this.dadosArmazem ? this.dadosArmazem.telefoneArmazem : '', [Validators.required]),
      enderecoArmazem: new FormControl(this.dadosArmazem ? this.dadosArmazem.enderecoArmazem : '', [Validators.required]),
      cidadeArmazem: new FormControl(this.dadosArmazem ? this.dadosArmazem?.cidadeArmazem : ''),
      ufArmazem: new FormControl(this.dadosArmazem ? this.dadosArmazem.ufArmazem : '', [Validators.required]),
      emailArmazem: new FormControl(this.dadosArmazem ? this.dadosArmazem.emailArmazem : ''),
    });
  }

  submit(){
    this.onSubmit.emit(this.armazemForm.value);
  }
}
