class Customer {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName,
        this.lastName = lastName;
        
    }
}

let myCustomer = new Customer("Emil", "Ivanov");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);