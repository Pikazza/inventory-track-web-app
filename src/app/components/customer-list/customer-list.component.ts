import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { InventoryApiService } from 'src/app/services/inventory-api.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers?: Customer[];
  currentCustomer: Customer = {};
  currentIndex = -1;
  title = '';

  constructor(private inventoryApiService: InventoryApiService) { }

  ngOnInit(): void {
    this.retrieveCustomers();
  }

  retrieveCustomers(): void {
    console.log("Pikazza coming to retrive customers");
    this.inventoryApiService.getCustomerAll()
      .subscribe(
        data => {
          this.customers = data;
          console.log("Pikazza:- "+data.length);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveCustomers();
    this.currentCustomer = {};
    this.currentIndex = -1;
  }

  setActiveCustomer(customer: Customer, index: number): void {
    this.currentCustomer = customer;
    this.currentIndex = index;
  }

}
