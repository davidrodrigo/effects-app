import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Array<UsuarioModel>> {
    return this.http.get<Array<UsuarioModel>>(`${this.url}/users?per_page=6`).pipe(map(resp => resp['data']));
  }

  getUserById(id: string): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`${this.url}/users/${id}`).pipe(map(resp => resp['data']));
  }

}
