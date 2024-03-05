import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICliente } from 'src/app/interfaces/icliente';
import { SClientesService } from 'src/app/services/sclientes.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.page.html',
  styleUrls: ['./add-cliente.page.scss'],
})
export class AddClientePage implements OnInit {

  newCliente: ICliente = {
    nombre: "",
    correo: "",
    password: ""
  }

  constructor(
    private clienteServ: SClientesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  crearCliente(){
    this.clienteServ.crearCliente(this.newCliente).subscribe()
    this.router.navigateByUrl("/list-cliente")
  }

}
