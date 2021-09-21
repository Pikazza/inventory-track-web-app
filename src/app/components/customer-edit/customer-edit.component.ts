import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Customer } from 'src/app/models/customer.model';
import { InventoryApiService } from 'src/app/services/inventory-api.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customer?: Customer;
  message = '';
  errorMessage = ""
  constructor(
    private inventoryApiService: InventoryApiService, 
    private tokenStorage: TokenStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.customer = this.tokenStorage.getUser();
    console.log(this.route.snapshot);
    this.getCustomer(this.route.snapshot.params.customerId);
  }


  getCustomer(CustomerId: any): void {
    
    this.inventoryApiService.getCustomerId(CustomerId).subscribe(
      data => {
        this.customer = data;
      },
      err => {
        this.message = err.error.message;
      }
    );
  }

  updateCustomer(): void {
    console.log("After change in the data "+ JSON.stringify(this.customer));
    
    this.inventoryApiService.updateCustomer(this.customer?.CustomerId, this.customer ).subscribe(
      data => {
        console.log("Successfully Updated"+JSON.stringify( data));
        this.message = "Record updated successfully"
      },
      err => {
        this.message = err.error.message;
      }
    );

  }

}
