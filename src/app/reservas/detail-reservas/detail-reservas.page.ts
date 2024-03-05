import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SreservasService } from 'src/app/services/sreservas.service';

@Component({
  selector: 'app-detail-reservas',
  templateUrl: './detail-reservas.page.html',
  styleUrls: ['./detail-reservas.page.scss'],
})
export class DetailReservasPage {

  reserva = {
    id: 0,
    nombreReservante: "",
    correoReservante: "",
    fecha: "",
    comentarios: "",
    precio: "",
    sesionReservada: ""

  }

  constructor(private reservaServ: SreservasService, private router: Router) { }

  ionViewWillEnter(){
    this.getReservaByID(this.getIDFromURL())
  }

  getIDFromURL(){
    let url = this.router.url
    let arr = url.split("/", 3)
    let id = parseInt(arr[2])
    return id
  }

  getReservaByID(reservaID:number){
    this.reservaServ.getReservaByID(reservaID).subscribe(
      (resp:any) => {
        this.reserva = {
          id: resp[0].id,
          nombreReservante: resp[0].nombreReservante,
          correoReservante: resp[0].correoReservante,
          fecha: resp[0].fecha,
          comentarios: resp[0].comentarios,
          precio: resp[0].precio,
          sesionReservada: resp[0].sesionReservada
        }
      }
    )
  }


}
