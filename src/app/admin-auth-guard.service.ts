import { UserService } from './user.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './auth.service';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router, private userSvrc: UserService) { }

  // canActivate(): Observable<boolean> {
  //   return this.auth.user$
  //   .pipe(switchMap(user => this.userSvrc.get(user.uid)))
  //   .pipe(map( appUser => appUser.isAdmin))
  // }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$
      .pipe(map(appUser => appUser.isAdmin));
  }
}
