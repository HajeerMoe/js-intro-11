/*
-Create class called Author
-Create constructor with fName, lName, country, arrofBooks
-Create method called getFullName for author that will return fname and lname
-Create method called getBooks for author that will return the arr of books.
*/
class Author {
    constructor (firstName, lastName, country, books) {
        this.firstName = firstName
        this.lastName = lastName
        this.country = country
        this.books = books
    }
    getFullName() { //instance method - to run instance method you create const author1 = new Author('Michael', 'Hall', 'TR', []) <---- EXAMPLE
                    //static method - to run static method you create const author1 = new Author('Michael', 'Hall', 'TR', []) <---- EXAMPLE
        return (`${this.firstName} ${this.lastName}`) // INSTANCE METHOD - MUST USE this.(variableName)
    }
    getBooks() {
        return this.books
    }
}

module.exports = Author

