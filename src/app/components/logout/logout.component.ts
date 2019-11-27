import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  user:User={
    username: '',
    password: '',
    nombre: '',
    email: '',
    direccion: '',
    telefono: null
  }
  constructor(private userService: UserService,  private router:Router) { }

  ngOnInit() {
    this.userService.setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['/peliculasTodas'])    
  }

}
