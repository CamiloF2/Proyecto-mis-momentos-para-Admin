import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SsesionService } from 'src/app/services/ssesion.service';

@Component({
  selector: 'app-update-sesion',
  templateUrl: './update-sesion.page.html',
  styleUrls: ['./update-sesion.page.scss'],
})
export class UpdateSesionPage {

  sesion = {
    id: 0,
    nombresesion: "",
    descripcion: "",
    imagen: "",
    precio: ""
  }

  constructor(private sesionServ: SsesionService, private router: Router) { }

  ionViewWillEnter(){
    this.getSesionByID(this.getIdFromURL())
  }

  getIdFromURL(){
    let url = this.router.url
    let arr = url.split("/",3)
    let id = parseInt(arr[2])
    return id
  }

  getSesionByID(sesionID:number){
    this.sesionServ.getSesionByID(sesionID).subscribe(
      (resp:any) => {
        this.sesion = {
          id: resp[0].id,
          nombresesion: resp[0].nombresesion,
          descripcion: resp[0].descripcion,
          imagen: resp[0].imagen,
          precio: resp[0].precio
        }
      }
    )
  }

  updateSesion(){
    this.sesionServ.actualizarSesion(this.sesion).subscribe()
    this.router.navigateByUrl("/list-sesion")
  }
}
