import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { Pedido } from 'src/app/models/pedido.model';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';
import { ActivatedRoute } from '@angular/router';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-alguiler-pelicula',
  templateUrl: './alguiler-pelicula.component.html',
  styleUrls: ['./alguiler-pelicula.component.scss']
})
export class AlguilerPeliculaComponent implements OnInit {
  fecha = new Date();
  pedido: Pedido = {
    numPedido: null,
    idUsuario: null,
    tituloPelicula: '',
    direccion: '',
    fechaAlquiler: new Date(),
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
    video: false,
    poster_path: '',
    id: null,
    adult: false,
    backdrop_path:'',
    original_language: '',
    original_title: '',
    genre_ids: null,
    title: '',
    vote_average: null,
    overview: '',
    release_date: ''
  }
 
  peliculas:Array<Movie>=[];
res:object;

  constructor(private pedidoService: PedidoService,
    private movieService: MovieService) { }

  ngOnInit() {
    this.movie = this.movieService.getMovie();
    this.pedido.tituloPelicula = this.movie.title
   
    // this.movie = JSON.parse(localStorage.getItem('movie'));
    // this.pedido.tituloPelicula = this.movie.title;
    this.user = JSON.parse(localStorage.getItem('user'));
    this.pedido.idUsuario = this.user.id;

    

  }

  //boton para añadir un pedido de un alquiler
  alquilerPedido() {
    this.pedidoService.hacerPedido(this.pedido)
      .subscribe(res => this.res = res)
  }

}
