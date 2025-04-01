
/*
Create a class called Customer
- Create a constructor for this class which takes 4 arguments:
    name
    age
    membershipType
    membershipCost
- Create a method called getDetails() which returns the customer's information in the format:
    {name} is {age} years old and has a {membershipType} membership with ${membershipCost}.
- Create a method called upgradeMembership()
    which upgrades the membership type of the customer to 'Premium' and increases the cost by 20%.
*/
export class Customer {
    constructor(name, age, membershipType, membershipCost) {
        this.name = name,
        this.age = age,
        this.membershipType = membershipType,
        this.membershipCost = membershipCost
    }
    getDetails() {
        return (`${this.name} is ${this.age} years old and has a ${this.membershipType} membership with $${this.membershipCost}`)
    }
    upgradeMembership() {
        this.membershipCost *= 1.20 
        this.membershipType = 'Premium'
    }
}



/*
Print information of all the customers using getDetails() method
EXPECTED OUTPUT:
John Doe is 30 years old and has a Premium membership with $60.
Jane Smith is 35 years old and has a Gold membership with $90.
David Johnson is 40 years old and has a Platinum membership with $170.
*/
