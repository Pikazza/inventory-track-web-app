import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { ProductListComponent } from './components/product-list/product-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CustomerLoginComponent,
    CustomerListComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    ProductListComponent,
    CustomerLoginComponent,
    ProfileEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
