import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Emil", "Ivanov", 'emil.ivanov@test.com', 50000),
    new SalesPerson("John", "Doe", 'john.doe@test.com', 40000),
    new SalesPerson("Claire", "Murphy", 'claire.murphy@test.com', 30000),
    new SalesPerson("Mai", "Truong", 'mai.truong@test.com', 30000),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
