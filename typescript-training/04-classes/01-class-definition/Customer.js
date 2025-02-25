var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName,
            this.lastName = lastName;
    }
    return Customer;
}());
var myCustomer = new Customer("Emil", "Ivanov");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
