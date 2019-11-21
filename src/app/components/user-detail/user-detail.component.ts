import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
user:User;
  constructor(
    private userService: UserService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('llega')
    console.log(localStorage.getItem('user'))
    this.route.paramMap.subscribe(params=>{
      const username = params.get('username')
      this.userService.getUser
      console.log(username)
    })
    // alert(localStorage.getItem('user'))
    // this.route.paramMap.subscribe(params=>{
    //     const username = params.get('username')
    //     console.log(username)
    //     this.userService.perfil(username)
    //     .subscribe(user=>{
    //       // console.log(this.user)
    //       // this.user = user;
    //       console.log(username);
          
    //     })
    //   })
  
    }
    
    // this.route.paramMap.subscribe(params=>{
    //   const username = params.get('username')
    //   this.userService.perfil(username)
    //   .subscribe(user=>{
    //     console.log(user)
    //     this.user = user;
    //   })
    // })
  

}
