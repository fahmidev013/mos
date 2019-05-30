import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
  }

  login() {
    try {
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      localStorage.setItem('returnUrl', returnUrl);

      this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
      //this.router.navigate(['admin/list']);
    } catch (e) {
      alert("Error!" + e.message);
    }
  }


  logout() {
    this.afAuth.auth.signOut();
  }



}
