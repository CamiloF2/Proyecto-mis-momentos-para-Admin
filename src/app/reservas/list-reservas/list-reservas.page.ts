import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { SreservasService } from 'src/app/services/sreservas.service';

@Component({
  selector: 'app-list-reservas',
  templateUrl: './list-reservas.page.html',
  styleUrls: ['./list-reservas.page.scss'],
})
export class ListReservasPage {

  reservas = [] = [{id:"", nombreReservante: "", correoReservante: "", fecha: "", comentarios: "", precio: "", sesionReservada: ""}]

  constructor(private reservaServ: SreservasService, private loadingCtrl: LoadingController,) { }

  ionViewWillEnter(){
    this.loadReservas()
  }

  async loadReservas(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtrl.create({
      message: "cargando...",
      spinner: "bubbles"
    }
    );
    await loading.present();

    this.reservaServ.listarReservas().subscribe(
      (resp) => {
        loading.dismiss();
        let listString = JSON.stringify(resp)
        this.reservas = JSON.parse(listString)
        event?.target.complete()
      },
      (err) => {
        console.log(err.message)
        loading.dismiss();
      }
    )
  }

}
