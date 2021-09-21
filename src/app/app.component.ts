import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../assets/css/bootstrap.css','../assets/css/custom.css','../assets/css/dataTables.bootstrap5.min.css','../assets/css/web-font.css']
})
export class AppComponent implements OnInit{
  title = 'inventory-track-web-app';
  isLoggedIn = false;
  customerId :any;
  role = '';

  constructor(private tokenStorageService: TokenStorageService) { }

  
  ngOnInit() {
    this.isLoggedIn = this.tokenStorageService.getToken()? true: false; // {2}
    this.customerId = this.tokenStorageService.getToken(); // {2}
    this.role = this.tokenStorageService.getUser().Role;
    console.log(this.role)
  }

  logout() {
    this.tokenStorageService.signOut();
    this.isLoggedIn = false;
  }

}


