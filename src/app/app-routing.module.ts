import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: CustomerLoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/edit', component: ProfileEditComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/:customerId', component: CustomerEditComponent },
  { path: 'customers/add', component: CustomerAddComponent },
  { path: 'customers/:customerId/edit', component: CustomerEditComponent },
  { path: 'customers/:customerId/products', component: ProductListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
