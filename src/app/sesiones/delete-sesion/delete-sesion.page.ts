import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SsesionService } from 'src/app/services/ssesion.service';

@Component({
  selector: 'app-delete-sesion',
  templateUrl: './delete-sesion.page.html',
  styleUrls: ['./delete-sesion.page.scss'],
})
export class DeleteSesionPage {

  sesion = {
    id: 0,
    nombresesion: "",
    descripcion: "",
    imagen: "",
    precio: ""
  }

  constructor(private router: Router, private sesionServ: SsesionService) { }

  ionViewWillEnter(){
    this.getSesionByID(this.getIDFromURL())
  }

  getIDFromURL(){
    let url = this.router.url
    let arr = url.split("/", 3)
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

  eliminarSesion(){
    this.sesionServ.eliminarSesion(this.sesion).subscribe()
    this.router.navigateByUrl("/list-sesion")
  }

}
