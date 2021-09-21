import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from 'src/app/models/product.model';
import { InventoryApiService } from 'src/app/services/inventory-api.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products?: Product[];
  currentProduct: Product = {};
  currentIndex = -1;
  title = '';

  constructor(
    private inventoryApiService: InventoryApiService,
    private tokenStorage: TokenStorageService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    this.retrieveProducts(this.tokenStorage.getToken());
  }

  retrieveProducts(customerId: any): void {
    console.log("Pikazza coming to retrive products");
    this.inventoryApiService.getProductByCustomerId(customerId)
      .subscribe(
        data => {
          console.log("Pikazza:- "+data.length);
          this.products = data;
          
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveProducts(this.tokenStorage.getToken());
    this.currentProduct = {};
    this.currentIndex = -1;
  }

  setActiveProduct(product: Product, index: number): void {
    this.currentProduct = product;
    this.currentIndex = index;
  }

}
