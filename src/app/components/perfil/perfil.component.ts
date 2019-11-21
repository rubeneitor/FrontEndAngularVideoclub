import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit{
  
  user:User={
    username: '',
    password: ''
  }
  constructor(private userService: UserService ) { }

  ngOnInit(){
  this.user=JSON.parse(localStorage.getItem('user')) 
  console.log(this.user)
  }
  

}



