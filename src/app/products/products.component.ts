import { Product } from './../models/product';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../services/category.service';
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

  categories$;
  category: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService, private catService: CategoryService) {

    productService
      .getAll()
      .pipe(switchMap(productsRes => {
        this.products = productsRes;
        return route.queryParamMap;
      }))
      .subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.category === this.category) :
          this.products;
      });

    this.categories$ = catService.getAll();


  }

}
