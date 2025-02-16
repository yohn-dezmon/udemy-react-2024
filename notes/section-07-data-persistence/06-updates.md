# Thinking about updates

- how to update the state most effectively
-

# Consistency!!!!

- User1 makes a request which updates the pages of the book to 60
- User2 makes a request which updates the title of the book to Dark Tower
  - they receive the updated object, with pages: 60, title: Dark Tower
  - therefore we should udpate state with this object instead of just what state we have from inisde the app bc this would miss the pages.

# Deleting

- `npm run server`
-

# General concept for persisting state with frontend

- it allows you to refresh the page and see the same objects
- basically for each handler that you would have even if you werent using an API, you just insert in an API call that does the corresponding action (update, delete, add) but continue to also update the state as you normally would
