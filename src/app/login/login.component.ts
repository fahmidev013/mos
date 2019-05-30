import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;

  username: string;
  password: string;
  user: any;

  item: Observable<any[]>;

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit() { }

  login() {
    this.authService.login();
  }




}
