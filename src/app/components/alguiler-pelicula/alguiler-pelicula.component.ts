import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { Pedido } from 'src/app/models/pedido.model';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-alguiler-pelicula',
  templateUrl: './alguiler-pelicula.component.html',
  styleUrls: ['./alguiler-pelicula.component.scss']
})
export class AlguilerPeliculaComponent implements OnInit {
  pedido: Pedido = {
    numPedido: null,
    idUsuario: null,
    direccion: '',
    fechaAlquiler: new Date,
    fechaEntrega: null
  }
  user: User = {
    id: null,
    username: '',
    password: '',
    nombre: '',
    email: '',
    direccion: '',
    telefono: null
  }

  movie: Movie = {
    popularity: null,
    vote_count: null,
    video: null,
    poster_path: '',
    id: null,
    adult: null,
    backdrop_path: '',
    original_language: '',
    original_title: '',
    genre_ids: null,
    title: '',
    vote_average: null,
    overview: '',
    release_date: ''
  };
  constructor(private pedidoService: PedidoService,
    private userService: UserService,
    private movieService: MovieService) { }

  ngOnInit() {
    console.log("----LLEGO ALQUILER----");

    this.user = JSON.parse(localStorage.getItem('user'))
  }

  alquilerPedido() {
    this.pedidoService.hacerPedido(this.pedido)
      .subscribe(res => console.log(res))
  }

}
