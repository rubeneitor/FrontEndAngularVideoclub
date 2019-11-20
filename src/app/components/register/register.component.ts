import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{
  user:User={
    username: '',
    password: ''
  }
  constructor(private userService: UserService) { }
  registrar(){
    this.userService.register(this.user)
    .subscribe(res=>console.log(res))
  }

}
