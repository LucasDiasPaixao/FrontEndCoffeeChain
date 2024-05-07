import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Produtores } from '../../../../FrontEndCoffeeChain/src/app/Models/Produtores';
import { Observable } from 'rxjs';
import { Response } from '../../../../FrontEndCoffeeChain/src/app/Models/Response'

@Injectable({
  providedIn: 'root'
})
export class ProdutorService {

  private apiUrl =  `${environment.ApiUrl}/Produtores`

  constructor( private http: HttpClient) { }

  GetProdutores() : Observable<Response<Produtores[]>>{
    return this.http.get<Response<Produtores[]>>(`${this.apiUrl}/GetProdutor`);

  }

  GetProdutor(id : number) : Observable<Response<Produtores>>{
    return this.http.get<Response<Produtores>>(`${this.apiUrl}/GetProdutorById/${id}`);
  }

  CreateProdutor(produtor: Produtores) : Observable<Response<Produtores[]>>{
    return this.http.post<Response<Produtores[]>>(`${this.apiUrl}/CreateProdutor`, produtor);
  }

  EditarProdutor(produtor: Produtores) : Observable<Response<Produtores[]>>{
    return this.http.put<Response<Produtores[]>>(`${this.apiUrl}/UpdateProdutor`, produtor);
  }

  ExcluirProdutor(id: number) : Observable<Response<Produtores[]>>{
    return this.http.delete <Response<Produtores[]>>(`${this.apiUrl}/DeleteProdutor/${id}`);
  }
}
