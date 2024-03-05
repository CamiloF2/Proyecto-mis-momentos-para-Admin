import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SFotografosService } from 'src/app/services/sfotografos.service';

@Component({
  selector: 'app-update-fotografos',
  templateUrl: './update-fotografos.page.html',
  styleUrls: ['./update-fotografos.page.scss'],
})
export class UpdateFotografosPage {

  fotografo = {
    id: 0,
    nombreFotografo: "",
    correoFotografo: "",
    password: "",
    presentacion: "",
    img1: "",
    img2: "",
    img3: "",
    aniosDeExperiencia: ""
  }

  constructor(private fotografosServ: SFotografosService, private router: Router ) { }

  ionViewWillEnter(){
    this.getFotografoByID(this.getIdFromURL())
  }

  getIdFromURL(){
    let url = this.router.url
    let arr = url.split("/",3)
    let id = parseInt(arr[2])
    return id
  }

  getFotografoByID(fotografoID:number){
    this.fotografosServ.getFotografoByID(fotografoID).subscribe(
      (resp:any) => {
        this.fotografo = {
          id: resp[0].id,
          nombreFotografo: resp[0].nombreFotografo,
          correoFotografo: resp[0].correoFotografo,
          password: resp[0].password,
          presentacion: resp[0].presentacion,
          img1: resp[0].img1,
          img2: resp[0].img2,
          img3: resp[0].img3,
          aniosDeExperiencia: resp[0].aniosDeExperiencia
        }
      }
    )
  }

  updateFotografo(){
    this.fotografosServ.actualizarFotografo(this.fotografo).subscribe()
    this.router.navigateByUrl("list-fotografos")
  }

}
