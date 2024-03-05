import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFotografo } from 'src/app/interfaces/ifotografo';
import { SFotografosService } from 'src/app/services/sfotografos.service';

@Component({
  selector: 'app-add-fotografo',
  templateUrl: './add-fotografos.page.html',
  styleUrls: ['./add-fotografos.page.scss'],
})
export class AddFotografoPage implements OnInit {

  newFotografo: IFotografo = {
    nombreFotografo: "",
    correoFotografo: "",
    password: "",
    presentacion: "",
    img1: "",
    img2: "",
    img3: "",
    aniosDeExperiencia: ""
  }

  constructor(
    private fotografoServ: SFotografosService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  crearFotografo(){
    this.fotografoServ.crearFotografo(this.newFotografo).subscribe()
    this.router.navigateByUrl("/list-fotografos")
  }

}
