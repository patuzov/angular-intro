import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { FormsModule } from '@angular/forms';
import { ResidentIconPipe } from './resident-icon.pipe';
import { CustomerComponent } from './customer/customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [    
    CustomersComponent,
    ResidentIconPipe,
    CustomerComponent,
    EditCustomerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CustomersComponent
  ]
})
export class CustomerModule { }
