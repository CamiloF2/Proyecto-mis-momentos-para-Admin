import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { SClientesService } from 'src/app/services/sclientes.service';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.page.html',
  styleUrls: ['./list-cliente.page.scss'],
})
export class ListClientePage{

  clientes = [] = 
             [{ id: "", nombre: "", correo: "", password: "" }]
      

  constructor(private clientesServ:SClientesService, private loadingCtrl: LoadingController) { }

  ionViewWillEnter(){
    this.loadClientes()
  }

  async loadClientes(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtrl.create({
      message: "Cargando...",
      spinner: "bubbles"
    }
    );
    await loading.present();

    this.clientesServ.listarClientes().subscribe(
      (resp) => {
        loading.dismiss();
        let listString = JSON.stringify(resp)
        this.clientes = JSON.parse(listString)
        event?.target.complete()
      },
      (err) => {
        console.log(err.message)
        loading.dismiss();
      }
    )
  }

}
