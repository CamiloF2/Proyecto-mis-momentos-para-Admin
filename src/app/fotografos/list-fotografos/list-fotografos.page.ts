import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { SFotografosService } from 'src/app/services/sfotografos.service';

@Component({
  selector: 'app-list-fotografos',
  templateUrl: './list-fotografos.page.html',
  styleUrls: ['./list-fotografos.page.scss'],
})
export class ListFotografoPage{

  fotografos = [] = 
             [{id: "", nombreFotografo: "", correoFotografo: "", password: "", presentacion: "", img1: "", img2: "", img3: "", aniosDeExperiencia: ""}]
      

  constructor(private fotografosServ:SFotografosService, private loadingCtrl: LoadingController) { }

  ionViewWillEnter(){
    this.loadFotografos()
  }

  async loadFotografos(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtrl.create({
      message: "Cargando...",
      spinner: "bubbles"
    }
    );
    await loading.present();

    this.fotografosServ.listarFotografos().subscribe(
      (resp) => {
        loading.dismiss();
        let listString = JSON.stringify(resp)
        this.fotografos = JSON.parse(listString)
        event?.target.complete()
      },
      (err) => {
        console.log(err.message)
        loading.dismiss();
      }
    )
  }

}
