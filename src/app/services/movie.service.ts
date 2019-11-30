import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs' 
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  apiKey = '210d6a5dd3f16419ce349c9f1b200d6d';
  apiUrl = 'https://api.themoviedb.org/3/'

  // isNonen = false;
  isNoneFiltro = true;
  // homeIsNone = false;
  // filterIsNone=false;
  genero='';
  titulo='';
  peliculas:Array<Movie>=[];
 

  //Toda la url seria: https://api.themoviedb.org/3/discover/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d
  constructor(private httpClient: HttpClient) { }

  getDiscoverMovie():Observable<object>{
   return this.httpClient.get('http://localhost:3000/pelicula');
  }

  getMoviesByCatergory(category:string):Observable<object>{
    return this.httpClient.get(`${this.apiUrl}movie/${category}?api_key=${this.apiKey}&language=es-ES`);
  }
  getPeliculasGenero(nombre:string):Observable<object>{
    return this.httpClient.get(`http://localhost:3000/peliculas/generos/name/${nombre}`)
  }

  getPeliculaTitulo(titulo:string):Observable<Object>{
    return this.httpClient.get(`http://localhost:3000/pelicula/title/${titulo}`)
  }

  getMovieById(id:string){
    return this.httpClient.get(`http://localhost:3000/pelicula/id/${id}`);
  }

 

}
