import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SClientesService } from 'src/app/services/sclientes.service';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.page.html',
  styleUrls: ['./update-cliente.page.scss'],
})
export class UpdateClientePage {

  cliente = {
    id: 0,
    nombre: "",
    correo: "",
    password: ""
  }

  constructor(private clienteServ: SClientesService, private router: Router) { }

  ionViewWillEnter(){
    this.getClienteByID(this.getIdFromURL())
  }

  getIdFromURL(){
    let url = this.router.url
    let arr = url.split("/",3)
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


  updateCliente(){
    this.clienteServ.actualizarCliente(this.cliente).subscribe()
    this.router.navigateByUrl("/list-cliente")
  }
}
