import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  user:User={
    id: null,
    username: '',
    password: '',
    nombre: '',
    email: '',
    direccion: '',
    telefono: null
  }
  constructor(private userService: UserService, 
    private movieService: MovieService,
    private pedidoService: PedidoService, 
    private router:Router) { }

  ngOnInit() {
    this.userService.setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['/peliculasTodas'])  
    
    this.movieService.isNoneFiltro = true;
    this.pedidoService.btnAlquilarNone = true;
  }

}
