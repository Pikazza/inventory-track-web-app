import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { InventoryApiService } from 'src/app/services/inventory-api.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  customer?: Customer;
  customerId?: any;
  errorMessage = "";

  constructor(
    private inventoryApiService: InventoryApiService, 
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.customer = this.tokenStorage.getUser();
    
  }

  updateCustomer(): void {
    console.log("After change in the data "+ JSON.stringify(this.customer));
    
    this.inventoryApiService.updateCustomer(this.customer?.CustomerId, this.customer ).subscribe(
      data => {
        console.log("Successfully Updated"+JSON.stringify( data));
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );

  }



}
