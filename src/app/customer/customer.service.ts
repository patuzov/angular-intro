import { Injectable } from '@angular/core';
import { Customer, CustomerDto } from './customer';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, filter, map, retry, retryWhen } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customersUrl = 'https://angularcustomer.azurewebsites.net/api/HttpTrigger1?code=HV8OCkxG7UCxCy9OFHzNw359j03xkgbwdmHFWoIAqJGnlc5SNuIpjA==';

  constructor(private httpClient: HttpClient) { }

  getCustomer(name: string): Observable<Customer> {
    return this.getCustomers()
    .pipe(
      map(customers => 
        customers
          .find(c => c.firstName.toLocaleLowerCase()==name.toLocaleLowerCase()))
    );
  }

  getCustomers(): Observable<Customer[]> {    

    return this.httpClient.get<Customer[]>(this.customersUrl)
      .pipe(
        tap(x => {
          console.log('HTTP response: ', x);
        }),
        map((customers: Customer[]) => customers.filter(x => x.resident)),
        tap(x => {
          console.log('Filtered customers: ', x);
        })//,
        // map((customers: Customer[]) => {
        //   const customersDto: CustomerDto[] = [];
        //   customers.forEach(c => {
        //     customersDto.push(<CustomerDto>{
        //       fullName: `${c.firstName} ${c.lastName}`,
        //       credit: c.credit,
        //       selected: false
        //     })
        //   });
        //   return customersDto
        // }),
        // tap(x => {
        //   console.log('Transformed customers ', x);
        // })
      );
  }
}
