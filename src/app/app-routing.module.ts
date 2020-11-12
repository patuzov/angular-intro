import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { CustomersComponent } from './customer/customers/customers.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [  
  { 
    path: 'edit/:name', 
    component: EditCustomerComponent, 
    canActivate: [AuthGuard]     
  },
  { path: 'unauthorized', component: UnauthorizedComponent},
  { path: '', component: CustomersComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
