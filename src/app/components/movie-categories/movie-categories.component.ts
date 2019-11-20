import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-categories',
  templateUrl: './movie-categories.component.html',
  styleUrls: ['./movie-categories.component.scss']
})
export class MovieCategoriesComponent implements OnInit {
  category: string;
  peliculas: Array<Movie>;
  constructor(private route:ActivatedRoute, //injectamos el ActivateRoute como dependencia para seguir los cambios de paramatros en la ruta
    private movieService: MovieService //injectamos el servicio movie para llamar al metodo getMoviesByCategory
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{//Me suscribo a cambios en los parametros del router
      this.category=params.get('category')//obtenemos el parametro category
      this.movieService.getMoviesByCatergory(this.category)//llamamos al metodo del servicio movies para pedir las peliculas segun la catergoria
      .subscribe(res=>
        this.peliculas = res['results']);//asignammos results a peliculas para poder acceder desde la plantilla HTML
    });
  }
}
