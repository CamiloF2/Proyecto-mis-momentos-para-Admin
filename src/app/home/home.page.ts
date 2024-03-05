import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from '../modelo/Auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  loginFormAdmin: FormGroup|any;
  public datosDelAdmin: AuthResponse | null | Observable<null> | any;

  constructor(
    private http: HttpClient,
    private route: Router
  ) {}

  ngOnInit(){
    this.loginFormAdmin = new FormGroup({
      'correo': new FormControl(),
      'password': new FormControl()
    })
  }


  loginDataAdmin(loginFormAdmin: FormGroup){
    this.http.get<any>("http://localhost:3000/usuarioAdmin").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.correo === this.loginFormAdmin.value.correo &&
        a.password === this.loginFormAdmin.value.password
      });
      if(user){
        alert('Te has logueado')
        this.loginFormAdmin.reset();
        this.route.navigate(['/inicio'],{queryParams:{
          id: this.datosDelAdmin?.id,
          nombreAdmin: this.datosDelAdmin?.nombreAdmin
        }});
      }else{
        alert('Usuario o contraseña incorrectos');
        this.route.navigate(['/home'])
      }
    }, err=>{
      alert('Algo ha salido mal');
    }
    )
    
  }

}
