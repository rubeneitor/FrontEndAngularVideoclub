import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-list-home-component',
  templateUrl: './movie-list-home-component.component.html',
  styleUrls: ['./movie-list-home-component.component.scss']
})
export class MovieListHomeComponentComponent implements OnInit {
  peliculas:Array<Movie>=[];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getDiscoverMovie()
    .subscribe(
      res=>
        this.peliculas= Object.values(res),  
      error=>console.error(error)
      )
  }

}
