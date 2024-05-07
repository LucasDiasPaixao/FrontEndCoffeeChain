import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../Models/Response';
import { Saida } from '../Models/Saida';

@Injectable({
  providedIn: 'root'
})
export class SaidaService {
  private apiUrl =  `${environment.ApiUrl}/saida`

  constructor( private http: HttpClient) { }

  GetSaidas() : Observable<Response<Saida[]>>{
    return this.http.get<Response<Saida[]>>(`${this.apiUrl}/GetSaida`);
  }

  GetSaida(id : number) : Observable<Response<Saida>>{
    return this.http.get<Response<Saida>>(`${this.apiUrl}/GetSaidaById/${id}`);
  }

  CreateSaida(saida: Saida) : Observable<Response<Saida[]>>{
    return this.http.post<Response<Saida[]>>(`${this.apiUrl}/CreateSaida`, saida);
  }

  EditarSaida(saida: Saida) : Observable<Response<Saida[]>>{
    return this.http.put<Response<Saida[]>>(`${this.apiUrl}/UpdateSaida`, saida);
  }

  ExcluirSaida(id: number) : Observable<Response<Saida[]>>{
    return this.http.delete <Response<Saida[]>>(`${this.apiUrl}/DeleteSaida/${id}`);
  }
}
