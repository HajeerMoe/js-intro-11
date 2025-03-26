/*
We will write our actual program that we define an author and the books
In this program we will write the biography of George R. R. Martin, an American novelist.

Create 3 books object with the below information:
        BookName                            Genre           TotalPage
        A Game of Thrones                   Epic Fantasy    694
        A Clash of Kings                    Epic Fantasy    768
        A Storm of Swords                   Epic Fantasy    973

Create an Author object with the below information:
    First name: George R. R.
    Last name: Martin
    Country: United States
    Books: are given above

1. Get and print Author's full name
2. Get and print Author's books iterated with a loop

EXPECTED OUTPUT:
George R. R. Martin
Book { title: 'A Game of Thrones', genre: 'Epic Fantasy', page: 694 }
Book { title: 'A Clash of Kings', genre: 'Epic Fantasy', page: 768 }
Book { title: 'A Storm of Swords', genre: 'Epic Fantasy', page: 973 }
*/

const Book = require('./Book')
const Author = require('./Author')

const book1 = new Book ('A Game of Thrones', 'Epic Fantasy', 694)
const book2 = new Book ('A Clash of Kings', 'Epic Fantasy', 768)
const book3 = new Book ('A Storm of Swords', 'Epic Fantasy', 973)
const author1 = new Author('George R. R.', 'Martin', 'United States', [book1, book2, book3])

console.log(author1.getFullName())

for (const book of author1.books) {
    console.log(book)
}

//Another way - author1.getBooks().forEach(book => console.log(book))

console.log(author1.getBooks().reduce((acc, curr) => curr.page < acc.page ? acc.title : curr.title)) //A Storm of Swords

/*
What is "IS A RELATIONSHIP" vs "HAS A RELATIONSHIP"?

class Animal {
}

class Dog extends Animal {
}

class GermanShepherd extends Dog {
}

GermanShepherd is a Dog
GermanShepherd is an Animal

IS A RELATIONSHIP - Inheritance with Parent Child Relationship


Author has books
Car has engine
HAS A RELATIONSHIP - it is not inheritance but one class uses another class as property

class Car {
constructor(engine)
}

class Engine {
}
*/
