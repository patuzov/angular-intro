import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit, OnDestroy {
  
  constructor(private customerService: CustomerService) {  
  }  
  
  lastCheckedCustomer: string;

  customers$ = this.customerService.getCustomers();

  ngOnInit(): void {
  }

  onChildCustomerSelected(customerChecked: boolean, name: string): void {
    console.log(customerChecked);
    if(customerChecked){
      this.lastCheckedCustomer = name;
    }
  }
  
  ngOnDestroy(): void {
    
  } 

}
