# Data persistence

- still using `projects/books` for this (!!)

# App Component

- `editBookById`
- `deleteBookById`
- `createBook`

- they all change our `books` state...

# State (!!!!)

- it gets refreshed whenver a user refreshes the application!
- we'll fix this by using an API server + db (!!)

# State and Persistence

- what we do to the db, we also have to do to our state object in teh case of deleting, creating or editing.

# JSON Server

- simple development API server
- when app starts up, we'll make a request to the API to get the current list of books
- `npm install json-server@0` -- stable version

# JSON Server installation...

- create a `db.json` file -- this is where data gets stored
- create a command to run JSON-Server
  - go to `package.json`
  - go to `"scripts"` section
  - add `"server": "json-server -p 3001 --watch db.json"`
- run the command
- we'll use two terminals, one for react server, another for API server
- `projects/books/db.json`

# Starting up vite server

`npm run start`
(runs on 3000)

# Starting up JSON-server

`npm run server`
(runs on 3001)
