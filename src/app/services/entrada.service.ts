import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Response } from '../Models/Response';
import { Observable } from 'rxjs';
import { Entrada } from '../Models/Entrada';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {
  private apiUrl =  `${environment.ApiUrl}/entrada`

  constructor( private http: HttpClient) { }

  GetEntradas() : Observable<Response<Entrada[]>>{
    return this.http.get<Response<Entrada[]>>(`${this.apiUrl}/GetEntrada`);
  }

  GetEntrada(id : number) : Observable<Response<Entrada>>{
    return this.http.get<Response<Entrada>>(`${this.apiUrl}/GetEntradaById/${id}`);
  }

  CreateEntrada(entrada: Entrada) : Observable<Response<Entrada[]>>{
    return this.http.post<Response<Entrada[]>>(`${this.apiUrl}/CreateEntrada`, entrada);
  }

  EditarEntrada(entrada: Entrada) : Observable<Response<Entrada[]>>{
    return this.http.put<Response<Entrada[]>>(`${this.apiUrl}/UpdateEntrada`, entrada);
  }

  ExcluirEntrada(id: number) : Observable<Response<Entrada[]>>{
    return this.http.delete <Response<Entrada[]>>(`${this.apiUrl}/DeleteEntrada/${id}`);
  }
}
