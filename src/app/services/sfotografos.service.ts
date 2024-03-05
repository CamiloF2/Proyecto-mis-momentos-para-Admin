import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFotografos } from '../interfaces/ifotografos';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IFotografo } from '../interfaces/ifotografo';

@Injectable({
  providedIn: 'root'
})
export class SFotografosService {

  constructor(private http: HttpClient ) { }

  listarFotografos(): Observable<IFotografos>{
    return this.http.get<IFotografos>(`${environment.apiURL}/fotografos`) //llamamos a la variable apiURL desde environment con las ´´
  }

  crearFotografo(newFotografo: IFotografo): Observable<IFotografo>{
    return this.http.post<IFotografo>(`${environment.apiURL}/fotografos`, newFotografo)
  }

  getFotografoByID(id:number):Observable<IFotografos>{
    return this.http.get<IFotografos>(`${environment.apiURL}/fotografos/?id=${id}`)
  }

  actualizarFotografo(fotografo:any):Observable<IFotografos>{
    return this.http.put<IFotografos>(`${environment.apiURL}/fotografos/${fotografo.id}`, fotografo)
  }

  eliminarFotografo(fotografo:any):Observable<IFotografos>{
    return this.http.delete<IFotografos>(`${environment.apiURL}/fotografos/${fotografo.id}`)
  }
}
