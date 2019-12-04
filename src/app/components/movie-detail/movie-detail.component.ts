import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { PedidoService } from 'src/app/services/pedido.service';
import { Pedido } from 'src/app/models/pedido.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  pedido: Pedido = {
    numPedido: null,
    idUsuario: null,
    tituloPelicula: '',
    direccion: '',
    fechaAlquiler: new Date,
    fechaEntrega: null
  }

  movie: object;
  peliculas: Array<Movie> = [];
  constructor(
    private movieService: MovieService,
    private pedidoService: PedidoService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  //al cargarse el componente se cargan los detalles de cada pelicula al que se clickea
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id')
      this.movieService.getMovieById(id)
      
        .subscribe(movie => {
          this.movie = movie;
          // console.log(movie['title']);
        })
    })
  }

  //boton de alquilar para acceder al formulario de rellenar el pedido
  alquilar() {
    this.router.navigateByUrl('/pedido');
  }

}
