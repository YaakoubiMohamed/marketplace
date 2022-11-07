import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  loggedIn: boolean = false
  user: any;

  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {
    this.loggedIn= this.authService.isLoggedIn;
    this.user = JSON.parse(localStorage.getItem('userInfo')!)
    console.log('userInfo',this.user);


  }

}
