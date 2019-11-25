import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs' 

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiKey = '210d6a5dd3f16419ce349c9f1b200d6d';
  apiUrl = 'https://api.themoviedb.org/3/'

  //Toda la url seria: https://api.themoviedb.org/3/discover/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d
  constructor(private httpClient: HttpClient) { }

  getDiscoverMovie():Observable<object>{
   return this.httpClient.get('http://localhost:3000/pelicula');
  }

  getMoviesByCatergory(category:string):Observable<object>{
    return this.httpClient.get(`${this.apiUrl}movie/${category}?api_key=${this.apiKey}&language=es-ES`);
  }
  getPeliculasGenero(name:string):Observable<object>{
    return this.httpClient.get(`http://localhost:3000/peliculas/generos/name/${name}`)
  }

  getMovieById(id:string){
    return this.httpClient.get(`${this.apiUrl}movie/${id}?api_key=${this.apiKey}&language=es-ES`);
  }
}
