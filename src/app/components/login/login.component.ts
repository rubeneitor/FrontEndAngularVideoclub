import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { PedidoService } from 'src/app/services/pedido.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  user:User={
    id: null,
    username: '',
    password: '',
    nombre: '',
    email: '',
    direccion: '',
    telefono: null
  }
  res:object;
  constructor(private userService:UserService,
    private movieService: MovieService,
    private pedidoService: PedidoService,
    private router:Router) { }

    //boton login para loguearse un usuario
  loguear(){
      this.userService.login(this.user)
      .subscribe(res=>{
        this.res=res;
        this.userService
        .setUser(res['user'])
        localStorage.setItem('token', res['token'])
        setTimeout(() => {
          this.router.navigate(['peliculasTodas'])
        }, 2500);
      },
      error=>this.res=error.error)
      this.movieService.isNoneFiltro = false;
      this.pedidoService.formPedidoNone = false;
      this.pedidoService.btnAlquilarNone = false;

      
  }
}
