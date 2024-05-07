import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produtores } from '../../../Models/Produtores';

@Component({
  selector: 'app-produtor-form',
  templateUrl: './produtor-form.component.html',
  styleUrl: './produtor-form.component.css'
})
export class ProdutorFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Produtores>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosProdutor: Produtores | null = null;
  
  produtorForm!: FormGroup;

  constructor(){ }

  ngOnInit(): void {
    
    this.produtorForm = new FormGroup({
      produtorId: new FormControl(this.dadosProdutor ? this.dadosProdutor.produtorId : 0),
      nomeProdutor: new FormControl(this.dadosProdutor ? this.dadosProdutor.nomeProdutor : '', [Validators.required]),
      cpfProdutor: new FormControl(this.dadosProdutor ? this.dadosProdutor.cpfProdutor : '', [Validators.required]),
      rgProdutor: new FormControl(this.dadosProdutor ? this.dadosProdutor.rgProdutor : ''),
      telefoneProdutor: new FormControl(this.dadosProdutor ? this.dadosProdutor.telefoneProdutor : '', [Validators.required]),
      enderecoProdutor: new FormControl(this.dadosProdutor ? this.dadosProdutor.enderecoProdutor : ''),
      cidadeProdutor: new FormControl(this.dadosProdutor ? this.dadosProdutor.cidadeProdutor : '', [Validators.required]),
      ufProdutor: new FormControl(this.dadosProdutor ? this.dadosProdutor.ufProdutor : '', [Validators.required]),
      emailProdutor: new FormControl(this.dadosProdutor ? this.dadosProdutor.emailProdutor : ''),
      cepProdutor: new FormControl(this.dadosProdutor ? this.dadosProdutor.cepProdutor : ''),
    });
  }

  submit(){
    this.onSubmit.emit(this.produtorForm.value);
  }
}
