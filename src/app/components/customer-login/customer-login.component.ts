import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from 'src/app/models/customer.model';
import { InventoryApiService } from 'src/app/services/inventory-api.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string = '';
  public redirectUrlForAdmin="/customers";
  // public redirectUrlForCustomer="/customers/:customerId/products";
  public redirectUrlForCustomer="/profile";
  public redirectUrl = "";
  // public token = '';

  constructor(
    private inventoryApiService: InventoryApiService, 
    private tokenStorage: TokenStorageService,
    private router: Router
     ) { }

  ngOnInit(): void {
    // this.token= ;
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().Role || "";
      console.log(this.tokenStorage.getToken());
      console.log(this.roles);
      var token = this.tokenStorage.getToken();
      this.redirectUrl  = (this.roles === "customer")? this.redirectUrlForCustomer.replace(":customerId",token!.toString() ): this.redirectUrlForAdmin;
      this.redirectUrl  = (this.roles === "customer")? this.redirectUrlForCustomer: this.redirectUrlForAdmin;
      this.router.navigate([this.redirectUrl]);
    }
    // this.logout();
  }

  onSubmit(): void {
    console.log( this.form);
    const { username, password } = this.form;
    
    this.inventoryApiService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.CustomerId);
        this.tokenStorage.saveUser(data);
        console.log( data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().Role || "";
        console.log(this.roles);
        this.redirectUrl  = this.roles == "customer" ? this.redirectUrlForCustomer: this.redirectUrlForAdmin;
        this.router.navigate([this.redirectUrl]);
        this.reloadPage();
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

  logout() {                            // {4}
    this.isLoggedIn= false;
    this.tokenStorage.signOut();
    this.router.navigate(['/login']);
  }

}
