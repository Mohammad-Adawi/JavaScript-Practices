//  Design Patterns I: JavaScript Classes?!?

class Book {
    constructor(author, published) {
        this.author = author;
        this.published = published;
    }
}

var Author = {
	name: 'John Smith',
	books: ['Book1', 'Book2']
}

var Publisher = new function() {
	this.authors = ['author1', 'author2'];
	this.books = ['Book1', 'Book2'];	
}

class Review {
	constructor(rating, user) {
		this.rating = rating;
		this.user = user;
	}
}
