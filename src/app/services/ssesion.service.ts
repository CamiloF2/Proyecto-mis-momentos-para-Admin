import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Isesion } from '../interfaces/isesion';
import { environment } from 'src/environments/environment';
import { Isesiones } from '../interfaces/isesiones';

@Injectable({
  providedIn: 'root'
})
export class SsesionService {

  constructor(private http: HttpClient ) { }

  listarSesiones(): Observable<Isesiones>{
    return this.http.get<Isesiones>(`${environment.apiURL}/sesiones`) //llamamos a la variable apiURL desde environment con las ´´
  }

  crearSesion(newSesion: Isesion): Observable<Isesion>{
    return this.http.post<Isesion>(`${environment.apiURL}/sesiones`, newSesion)
  }

  getSesionByID(id:number):Observable<Isesiones>{
    return this.http.get<Isesiones>(`${environment.apiURL}/sesiones/?id=${id}`)
  }

  actualizarSesion(sesion:any):Observable<Isesiones>{
    return this.http.put<Isesiones>(`${environment.apiURL}/sesiones/${sesion.id}`, sesion)
  }

  eliminarSesion(sesion:any):Observable<Isesiones>{
    return this.http.delete<Isesiones>(`${environment.apiURL}/sesiones/${sesion.id}`)
  }
}

