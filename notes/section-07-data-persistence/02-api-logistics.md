# How db.json works

- "books": [] -- tells JSON-Server that we want to store a list of books
- book objects will show up in the array we've provided

# Default APIs

- `POST localhost:3001/books`, body: `{ "title": "Harry Potter" }` --> creates a book (and assigns it an ID)
- `GET localhost:3001/books`, --> gets all books
- `PUT localhost:3001/books/1`, body: `{ "title": "Dark Tower" }` --> edit book 1,
- `DELETE localhost:3001/books/1` -- deletes the book with id of 1

# Postman

- use this just to test out the API server
- I just did this, and they all worked as expected! dope.
