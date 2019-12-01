import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  peliculas:Array<Movie>=[];
  genero: '';
  titulo = '';
  generoTitulo = '';

  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.movieService.getDiscoverMovie()
    .subscribe(
      res=>
        this.peliculas= Object.values(res),  
      error=>console.error(error)

      )
    
  }


  



  

}

