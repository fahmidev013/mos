import { Product } from './../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products?: Product[] = [];
  filteredProducts?: Product[] = [];


  category: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) {

    productService
      .getAll()
      .pipe(switchMap(productsRes => {
        this.products = productsRes as Product[];
        return route.queryParamMap;
      }))
      .subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.category === this.category) :
          this.products;
      });




  }

}
