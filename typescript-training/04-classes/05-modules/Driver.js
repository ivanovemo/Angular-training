"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("./Customer");
let myCustomer = new Customer_1.Customer("Emil", "Ivanov");
myCustomer.lastName = "Aleksandrov";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
