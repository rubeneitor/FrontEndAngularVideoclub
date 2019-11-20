import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiKey = '210d6a5dd3f16419ce349c9f1b200d6d';
  apiUrl = 'https://api.themoviedb.org/3/';
  private user:User;
  constructor(private httpClient: HttpClient) { }
  register(user: User):Observable<object>{
    return this.httpClient.post('http://localhost:3000/user/register', user)
  }

  login(user:User):Observable<object>{
    return this.httpClient.post('http://localhost:3000/user/login', user);
  }
    
  perfil(username:string){
    return this.httpClient.get(`http://localhost:3000/user/perfil/${username}`);
  }

  getUser():User{
    return this.user;
  }

  setUser(user:User):void{
    this.user=user;
  }
}

