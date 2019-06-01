import { Product } from '../../models/product';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataTableResource } from '@ismatjon/angular-data-table';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  products: any[];
  filteredProducts: any[];
  subscription: Subscription;
  tableResource: DataTableResource<Product>;

  items: Product[] = [];
  itemCount: number;

  constructor(
    private productSvc: ProductService
  ) {

  }


  private initializeTable(products: Product[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset: 0 })
      .then(items => this.items = items);
    this.tableResource.count().then(count => this.itemCount = count);
  }


  rowClick(rowEvent) {
    console.log('Clicked: ' + rowEvent.row.value);
  }

  rowDoubleClick(rowEvent) {
    alert('Double clicked: ' + rowEvent.row.value);
  }

  rowTooltip(item) { return item.name; }

  reloadItems(params) {

    if (!this.tableResource) return;
    this.tableResource.query(params).then(res => this.items = res);

  }

  ngOnInit() {
    this.subscription = this.productSvc.getAll()
      .subscribe(products => {
        this.filteredProducts = this.products = products;
        this.initializeTable(products);
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  filter(query: string) {
    console.log(query);

    let filteredProducts = (query) ?
      this.products.filter(p => p['title'].toLowerCase().includes(query.toLowerCase())) :
      this.products;

    this.initializeTable(filteredProducts);
  }



}
