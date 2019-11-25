import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  user:User={
    username: '',
    password: ''
  }
  res:object;
  constructor(private userService:UserService,
    private router:Router) { }

  // loguear(){
  //   this.userService.login(this.user)
  //   .subscribe(res=>console.log(res))
  // }

  loguear(){
      this.userService.login(this.user)
      .subscribe(res=>{
        this.res=res;
        this.userService
        .setUser(res['user'])
        localStorage.setItem('token', res['token'])
        setTimeout(() => {
          this.router.navigate(['/pelicula'])
        }, 2500);
      },
      error=>this.res=error.error)
      this.userService.isNone = false;
      
  }
}
