import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-por-genero',
  templateUrl: './por-genero.component.html',
  styleUrls: ['./por-genero.component.scss']
})
export class PorGeneroComponent implements OnInit {
  peliculas: Array<Movie> = [];
  id: number;
  name: string;
  genero: '';
  constructor(private movieService: MovieService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name')
      this.movieService.getPeliculasGenero(this.name)
        .subscribe(res =>
          this.peliculas = Object.values(res),

          error => console.log(error)
        )
    })

  }
  

}
