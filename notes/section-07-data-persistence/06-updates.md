# Thinking about updates

- how to update the state most effectively
-

# Consistency!!!!

- User1 makes a request which updates the pages of the book to 60
- User2 makes a request which updates the title of the book to Dark Tower
  - they receive the updated object, with pages: 60, title: Dark Tower
  - therefore we should udpate state with this object instead of just what state we have from inisde the app bc this would miss the pages.


