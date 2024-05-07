import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Armazem } from '../Models/Armazem';
import { Response } from '../Models/Response';

@Injectable({
  providedIn: 'root'
})
export class ArmazemService {

  private apiUrl =  `${environment.ApiUrl}/Armazem`

  constructor( private http: HttpClient) { }

  GetArmazens() : Observable<Response<Armazem[]>>{
    return this.http.get<Response<Armazem[]>>(`${this.apiUrl}/GetArmazem`);
  }

  GetArmazem(id : number) : Observable<Response<Armazem>>{
    return this.http.get<Response<Armazem>>(`${this.apiUrl}/GetArmazemById/${id}`);
  }

  CreateArmazem(Armazem: Armazem) : Observable<Response<Armazem[]>>{
    return this.http.post<Response<Armazem[]>>(`${this.apiUrl}/CreateArmazem`, Armazem);
  }

  EditarArmazem(Armazem: Armazem) : Observable<Response<Armazem[]>>{
    return this.http.put<Response<Armazem[]>>(`${this.apiUrl}/UpdateArmazem`, Armazem);
  }

  ExcluirArmazem(id: number) : Observable<Response<Armazem[]>>{
    return this.http.delete <Response<Armazem[]>>(`${this.apiUrl}/DeleteArmazem/${id}`);
  }
}
