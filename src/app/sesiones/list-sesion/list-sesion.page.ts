import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { SsesionService } from 'src/app/services/ssesion.service';

@Component({
  selector: 'app-list-sesion',
  templateUrl: './list-sesion.page.html',
  styleUrls: ['./list-sesion.page.scss'],
})
export class ListSesionPage {

  sesiones = [] =
              [{id: "", nombresesion: "", descripcion:"", imagen:"", precio:""}]

  constructor(private sesionServ: SsesionService, private loadingCtrl: LoadingController) { }

  ionViewWillEnter(){
    this.loadSesiones()
  }

  async loadSesiones(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtrl.create({
      message: "Cargando...",
      spinner: "bubbles"
    }
    );
    await loading.present();

    this.sesionServ.listarSesiones().subscribe(
      (resp) => {
        loading.dismiss();
        let listString = JSON.stringify(resp)
        this.sesiones = JSON.parse(listString)
        event?.target.complete()
      },
      (err) => {
        console.log(err.message)
        loading.dismiss();
      }
    )


  }



}
