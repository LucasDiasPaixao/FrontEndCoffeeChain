import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Propriedade } from '../Models/Propriedade';
import { Observable } from 'rxjs';
import { Response } from '../../../../FrontEndCoffeeChain/src/app/Models/Response'

@Injectable({
  providedIn: 'root'
})
export class PropriedadeService {

  private apiUrl =  `${environment.ApiUrl}/Propriedade`

  constructor( private http: HttpClient) { }

  GetPropriedades() : Observable<Response<Propriedade[]>>{
    return this.http.get<Response<Propriedade[]>>(`${this.apiUrl}/GetPropriedade`);
  }

  GetPropriedade(id : number) : Observable<Response<Propriedade>>{
    return this.http.get<Response<Propriedade>>(`${this.apiUrl}/GetPropriedadeById/${id}`);
  }

  CreatePropriedade(propriedade: Propriedade) : Observable<Response<Propriedade[]>>{
    return this.http.post<Response<Propriedade[]>>(`${this.apiUrl}/CreatePropriedade`, propriedade);
  }

  EditarPropriedade(propriedade: Propriedade) : Observable<Response<Propriedade[]>>{
    return this.http.put<Response<Propriedade[]>>(`${this.apiUrl}/UpdatePropriedade`, propriedade);
  }

  ExcluirPropriedade(id: number) : Observable<Response<Propriedade[]>>{
    return this.http.delete <Response<Propriedade[]>>(`${this.apiUrl}/DeletePropriedade/${id}`);
  }
}
