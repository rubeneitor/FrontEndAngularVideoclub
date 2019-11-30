import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-busqueda-filtro',
  templateUrl: './busqueda-filtro.component.html',
  styleUrls: ['./busqueda-filtro.component.scss']
})
export class BusquedaFiltroComponent implements OnInit {
  peliculas: Array<Movie> = [];
  genero = '';
  titulo = '';
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    
  }

  buscarGenero(){
    this.movieService.getPeliculasGenero(this.genero)
    .subscribe(res=> 
      this.peliculas = Object.values(res),
      error => console.log(error)
      )
      this.titulo = '';
      // this.movieService.isNonen = true;ç
      // this.movieService.homeIsNone

  }
  buscarTitulo(){
    this.movieService.getPeliculaTitulo(this.titulo)
    .subscribe(res=> this.peliculas = Object.values(res),
    error => console.log(error)
    )
    this.genero = '';
    // this.movieService.homeIsNone = true;


  }

}
