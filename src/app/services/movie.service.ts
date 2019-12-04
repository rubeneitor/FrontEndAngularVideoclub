import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs' 
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  currentMovie:Movie;

  isNoneFiltro = true;
  genero='';
  titulo='';
  peliculas:Array<Movie>=[];

  constructor(private httpClient: HttpClient) { }

  //endopoint de todas las peliculas
  getDiscoverMovie():Observable<object>{
   return this.httpClient.get('http://localhost:3000/pelicula');
  }

  //endpoint de las peliculas por genero
  getPeliculasGenero(nombre:string):Observable<object>{
    return this.httpClient.get(`http://localhost:3000/peliculas/generos/name/${nombre}`)
  }

  //endpoint de las peliculas por titulo
  getPeliculaTitulo(titulo:string):Observable<Object>{
    return this.httpClient.get(`http://localhost:3000/pelicula/title/${titulo}`)
  }

  //endpoint de la pelicula por id
  getMovieById(id:string){
    return this.httpClient.get(`http://localhost:3000/pelicula/id/${id}`);
  }

  getMovie(): Movie{
    return this.currentMovie;
  }

  setMovie(movie:Movie){
    this.currentMovie = movie
  }

 

}
