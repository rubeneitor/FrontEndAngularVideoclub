import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Subscriber } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: User = {
    id: null,
    username: '',
    password: '',
    nombre: '',
    email: '',
    direccion: '',
    telefono: null
  }
  res: object;
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {

  }
  //boton para registrar un nuevo usuario 
  registrar() {
    this.userService.register(this.user)
      .subscribe(res => this.res = res)
    setTimeout(() => {
      this.router.navigate(['peliculasTodas'])
    }, 2500);

  }

}
