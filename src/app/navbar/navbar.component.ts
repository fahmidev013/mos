import { AppUser } from './../models/app-user';
import { AuthenticationService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  appUser: AppUser;

  constructor(private auth: AuthenticationService) { }




  ngOnInit() {

    this.auth.appUser$.subscribe(user => this.appUser = user);
  }


  logout() {
    this.auth.logout();
  }

}
