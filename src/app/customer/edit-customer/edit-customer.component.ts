import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { flatMap, map } from  'rxjs/operators';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService) {           }

  customer: Customer;

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      map(p => p.get('name')),
      flatMap((customerName: string) => {
        return this.customerService.getCustomer(customerName)
      })
    ).subscribe(c => {
      this.customer = c;
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

}
