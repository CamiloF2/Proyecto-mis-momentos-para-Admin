import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SClientesService } from 'src/app/services/sclientes.service';

@Component({
  selector: 'app-delete-cliente',
  templateUrl: './delete-cliente.page.html',
  styleUrls: ['./delete-cliente.page.scss'],
})
export class DeleteClientePage {

  cliente = {
    id: 0,
    nombre: "",
    correo: "",
    password: ""
  }

  constructor(private router: Router, private clienteServ: SClientesService) { }

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

  eliminarCliente(){
    this.clienteServ.eliminarCliente(this.cliente).subscribe()
    this.router.navigateByUrl("/list-cliente")
  }

}
