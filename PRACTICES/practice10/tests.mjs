import { Customer } from "./Customer.mjs"
import { VIPCustomer } from "./VIPcustomer.mjs"
import { BusinessCustomer } from "./BusinessCustomer.mjs"

let customer1 = new Customer ('John Doe', 30, 'Basic', 50)
let vipCustomer1 = new VIPCustomer ('Jane Smith', 35, 'Gold', 100)
let businessCustomer1 = new BusinessCustomer ('David Johnson', 40, 'Platinum', 200, 2)


customer1.upgradeMembership()
vipCustomer1.applyDiscount()
businessCustomer1.extendContract()

console.log(customer1.getDetails())
console.log(vipCustomer1.getDetails())
console.log(businessCustomer1.getDetails())

console.log(businessCustomer1.duration)