import { Component, Input, OnInit } from '@angular/core';
import { ProdutorService } from '../../../services/produtor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtores } from '../../../Models/Produtores';
import { Propriedade } from '../../../Models/Propriedade';
import { PropriedadeService } from '../../../services/propriedade.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit{



  produtor? : Produtores;
  propriedades?: Propriedade;

  constructor(private produtorService: ProdutorService, private propriedadeService: PropriedadeService,private route: ActivatedRoute, private router: Router){ }
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.produtorService.GetProdutor(id).subscribe((data) => {
      this.produtor = data.dados;
    })
  }
}
