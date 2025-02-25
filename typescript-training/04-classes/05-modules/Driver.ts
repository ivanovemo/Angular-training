import { Customer } from "./Customer";

let myCustomer = new Customer("Emil", "Ivanov");

myCustomer.lastName = "Aleksandrov";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);