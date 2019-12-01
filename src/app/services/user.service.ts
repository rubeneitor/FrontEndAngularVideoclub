import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  isNone = true;
  apiKey = '210d6a5dd3f16419ce349c9f1b200d6d';
  apiUrl = 'https://api.themoviedb.org/3/';
  private user:User;
  constructor(private httpClient: HttpClient) { }
  //endpoint para registrar un usuario
  register(user: User):Observable<object>{
    return this.httpClient.post('http://localhost:3000/user/register', user)
  }

  //endpoint para loguear a un usuario
  login(user:User):Observable<object>{
    return this.httpClient.post('http://localhost:3000/user/login', user);
  }
    
  //endpoint para mostrar el perfil de un usuario
  perfil(username:string){
    return this.httpClient.get(`http://localhost:3000/user/perfil/${username}`);
  }

  //metodo get para obtener un usuario
  getUser():User{
    return this.user;
  }

  //metodo set para gardar el usuario en localStorage
  setUser(user:User):void{
    this.user=user;
    localStorage.setItem('user',JSON.stringify(user) )
  }
}

