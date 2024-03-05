import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Isesion } from 'src/app/interfaces/isesion';
import { SsesionService } from 'src/app/services/ssesion.service';

@Component({
  selector: 'app-add-sesion',
  templateUrl: './add-sesion.page.html',
  styleUrls: ['./add-sesion.page.scss'],
})
export class AddSesionPage implements OnInit {

  newSesion: Isesion = {
    nombresesion: "",
    descripcion: "",
    imagen: "",
    precio: ""
  }

  constructor(
    private sesionServ: SsesionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  crearSesion(){
    this.sesionServ.crearSesion(this.newSesion).subscribe()
    this.router.navigateByUrl("/list-sesion")
  }

}
