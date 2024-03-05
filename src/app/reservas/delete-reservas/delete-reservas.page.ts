import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SreservasService } from 'src/app/services/sreservas.service';

@Component({
  selector: 'app-delete-reservas',
  templateUrl: './delete-reservas.page.html',
  styleUrls: ['./delete-reservas.page.scss'],
})
export class DeleteReservasPage {

  reserva = {
    id: 0,
    nombreReservante: "",
    correoReservante: "",
    fecha: "",
    comentarios: "",
    precio: "",
    sesionReservada: ""
  }

  constructor(private router: Router, private reservaServ: SreservasService) { }

  ionViewWillenter(){
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

  eliminarReserva(){
    this.reservaServ.eliminarReserva(this.reserva).subscribe()
    this.router.navigateByUrl("/list-reservas")
  }


}
