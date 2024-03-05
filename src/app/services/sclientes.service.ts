import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClientes } from '../interfaces/iclientes';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICliente } from '../interfaces/icliente';

@Injectable({
  providedIn: 'root'
})
export class SClientesService {

  constructor(private http: HttpClient ) { }

  listarClientes(): Observable<IClientes>{
    return this.http.get<IClientes>(`${environment.apiURL}/clientes`) //llamamos a la variable apiURL desde environment con las ´´
  }

  crearCliente(newCliente: ICliente): Observable<ICliente>{
    return this.http.post<ICliente>(`${environment.apiURL}/clientes`, newCliente)
  }

  getClienteByID(id:number):Observable<IClientes>{
    return this.http.get<IClientes>(`${environment.apiURL}/clientes/?id=${id}`)
  }

  actualizarCliente(cliente:any):Observable<IClientes>{
    return this.http.put<IClientes>(`${environment.apiURL}/clientes/${cliente.id}`, cliente)
  }

  eliminarCliente(cliente:any):Observable<IClientes>{
    return this.http.delete<IClientes>(`${environment.apiURL}/clientes/${cliente.id}`)
  }
}
