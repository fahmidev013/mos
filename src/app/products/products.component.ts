import { Router } from '@angular/router';
import { Product } from './../products';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {

  }






}
