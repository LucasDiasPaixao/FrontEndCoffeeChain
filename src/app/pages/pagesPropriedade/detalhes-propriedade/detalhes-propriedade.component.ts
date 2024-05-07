import { Component, OnInit } from '@angular/core';
import { Propriedade } from '../../../Models/Propriedade';
import { ActivatedRoute, Router } from '@angular/router';
import { PropriedadeService } from '../../../services/propriedade.service';
import { Produtores } from '../../../Models/Produtores';
import { ProdutorService } from '../../../services/produtor.service';

@Component({
  selector: 'app-detalhes-propriedade',
  templateUrl: './detalhes-propriedade.component.html',
  styleUrl: './detalhes-propriedade.component.css'
})
export class DetalhesPropriedadeComponent implements OnInit{

  propriedade! : Propriedade;
  produtor! : Produtores;

  constructor(private propriedadeService: PropriedadeService, private route: ActivatedRoute, private router: Router, private produtorService: ProdutorService){ }
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.propriedadeService.GetPropriedade(id).subscribe((data) => {
      this.propriedade = data.dados;
      const idProdutor = data.dados.produtorId;
      this.produtorService.GetProdutor(idProdutor).subscribe((data) => {
        this.produtor = data.dados;
      });
    });
}
}