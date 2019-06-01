import { Product } from './../models/product';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../services/category.service';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: Product[] = [];
  filteredProducts: Product[] = [];

  categories$;
  category: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService, private catService: CategoryService) {


    productService.getAll().subscribe(productsRes => {
      this.products = productsRes as Product;
    });

    this.categories$ = catService.getAll();

    route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
      this.filteredProducts = (this.category) ?
        this.products.filter(p => p.category === this.category) :
        this.products;
    });
  }

}
