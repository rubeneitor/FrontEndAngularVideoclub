import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
user:object
  constructor(
    private userService: UserService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      const username = params.get('username')
      this.userService.perfil(username)
      .subscribe(user=>{
        console.log(user)
        this.user = user;
      })
    })
  }

}
