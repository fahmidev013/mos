import { CategoryService } from './../../services/category.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  categories$;
  @Input('category') category;

  constructor(private catService: CategoryService) {
    this.categories$ = catService.getAll();
  }

  ngOnInit() {
  }

}
