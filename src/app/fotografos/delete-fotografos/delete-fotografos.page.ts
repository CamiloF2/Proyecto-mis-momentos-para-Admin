import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SFotografosService } from 'src/app/services/sfotografos.service';

@Component({
  selector: 'app-delete-fotografos',
  templateUrl: './delete-fotografos.page.html',
  styleUrls: ['./delete-fotografos.page.scss'],
})
export class DeleteFotografosPage{

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

  constructor(private router: Router, private fotografosServ: SFotografosService) { }

  ionViewWillEnter(){
    this.getFotografoByID(this.getIDFromURL())
  }

  getIDFromURL(){
    let url = this.router.url
    let arr = url.split("/", 3) //dividimos la url por /, nos sirve el 3ro que es la id
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

  eliminarFotografo(){
    this.fotografosServ.eliminarFotografo(this.fotografo).subscribe()
    this.router.navigateByUrl("/list-fotografos")
  }

}
