import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit{
 
  user:User={
    id: null,
    username: '',
    password: '',
    nombre: '',
    email: '',
    direccion: '',
    telefono: null
  }
 

  constructor(private router:Router ) { }

  //cogemos el usuario guardado del localStorage
  ngOnInit(){
  this.user=JSON.parse(localStorage.getItem('user')) 
  }

  //boton para acceder a los pedidos del usuario
  pedidos(){
    this.router.navigateByUrl(`/pedidos/id/${this.user.id}`)
  }
  

}
