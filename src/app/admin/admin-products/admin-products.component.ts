import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  products: any[];
  filteredProducts: any[];
  subscription: Subscription;

  constructor(
    private productSvc: ProductService
  ) {

  }

  ngOnInit() {
    this.subscription = this.productSvc.getAll()
      .subscribe(products => this.filteredProducts = this.products = products);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  filter(query: string) {
    this.filteredProducts = (query) ?
      this.products.filter(p => p['title'].toLowerCase().includes(query.toLowerCase())) :
      this.products;
  }



}
