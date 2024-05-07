import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../../../../FrontEndCoffeeChain/src/app/Models/Empresa';
import { Observable } from 'rxjs';
import { Response } from '../../../../FrontEndCoffeeChain/src/app/Models/Response'

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private apiUrl =  `${environment.ApiUrl}/Empresa`

  constructor( private http: HttpClient) { }

  GetEmpresas() : Observable<Response<Empresa[]>>{
    return this.http.get<Response<Empresa[]>>(`${this.apiUrl}/GetEmpresa`);

  }

  GetEmpresa(id : number) : Observable<Response<Empresa>>{
    return this.http.get<Response<Empresa>>(`${this.apiUrl}/GetEmpresaById/${id}`);
  }

  CreateEmpresa(empresa: Empresa) : Observable<Response<Empresa[]>>{
    return this.http.post<Response<Empresa[]>>(`${this.apiUrl}/CreateEmpresa`, empresa);
  }

  EditarEmpresa(empresa: Empresa) : Observable<Response<Empresa[]>>{
    return this.http.put<Response<Empresa[]>>(`${this.apiUrl}/UpdateEmpresa`, empresa);
  }

  ExcluirEmpresa(id: number) : Observable<Response<Empresa[]>>{
    return this.http.delete <Response<Empresa[]>>(`${this.apiUrl}/DeleteEmpresa/${id}`);
  }
}
