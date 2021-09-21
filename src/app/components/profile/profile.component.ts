import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  customer?: Customer;
  constructor( 
    private tokenStorage: TokenStorageService
    ) { }

  ngOnInit(): void {
    this.customer = this.tokenStorage.getUser();
    console.log(this.customer)
    // this.customer =  (this.customer=== undefined) ? this.customer:{} ;

  }

}

