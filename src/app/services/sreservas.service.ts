import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IReservas } from '../interfaces/ireservas';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IReserva } from '../interfaces/ireserva';

@Injectable({
  providedIn: 'root'
})
export class SreservasService {

  constructor(private http: HttpClient) { }


  listarReservas(): Observable<IReservas>{
    return this.http.get<IReservas>(`${environment.apiURL}/reservas`) //llamamos a la variable apiURL desde environment con las ´´
  }

  eliminarReserva(reserva:any):Observable<IReservas>{
    return this.http.delete<IReservas>(`${environment.apiURL}/reservas/${reserva.id}`)
  }

  getReservaByID(id:number):Observable<IReservas>{
    return this.http.get<IReservas>(`${environment.apiURL}/reservas/?id=${id}`)
  }


}

