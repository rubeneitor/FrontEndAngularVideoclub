import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService:UserService,
    private mmovieService: MovieService) { }

  ngOnInit() {
  }

}
