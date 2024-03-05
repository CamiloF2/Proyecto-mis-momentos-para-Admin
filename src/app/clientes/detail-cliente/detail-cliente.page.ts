import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SClientesService } from 'src/app/services/sclientes.service';

@Component({
  selector: 'app-detail-cliente',
  templateUrl: './detail-cliente.page.html',
  styleUrls: ['./detail-cliente.page.scss'],
})
export class DetailClientePage {

  cliente = {
    id: 0,
    nombre: "",
    correo: "",
    password: ""
  }

  constructor(private clienteServ: SClientesService, private router: Router) { }

  ionViewWillEnter(){
    this.getClienteByID(this.getIDFromURL())
  }

  getIDFromURL(){
    let url = this.router.url
    let arr = url.split("/", 3) //dividimos la url por /, nos sirve el 3ro que es la id
    let id = parseInt(arr[2])
    return id
  }

  getClienteByID(clienteID:number){
    this.clienteServ.getClienteByID(clienteID).subscribe(
      (resp:any) => {
        this.cliente = {
          id: resp[0].id,
          nombre: resp[0].nombre,
          correo: resp[0].correo,
          password: resp[0].password
        }
      }
    )
  }

}
