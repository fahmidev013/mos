import { Router } from '@angular/router';
import { AuthenticationService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mos';

  constructor(private authSvr: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.authSvr.user$.subscribe(user => {
      if (user) {
        let returnUrl = localStorage.getItem('returnUrl');
        this.router.navigateByUrl(returnUrl);
      }
    });
  }

}
