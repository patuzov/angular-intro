import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  @Input() childCustomer: Customer; //parent -> child  
  @Output() selected = new EventEmitter<boolean>(); //child -> parent

  constructor() { }

  ngOnInit(): void {
  }

  onCustomerSelected(checked: boolean): void {
    this.selected.emit(checked);
  }

}
