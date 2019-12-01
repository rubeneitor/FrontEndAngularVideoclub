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

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id')
      this.movieService.getMovieById(id)
        .subscribe(movie => {
          this.movie = movie;
        })
    })
  }

  alquilar() {
    this.router.navigateByUrl('/pedido');
  }

}
