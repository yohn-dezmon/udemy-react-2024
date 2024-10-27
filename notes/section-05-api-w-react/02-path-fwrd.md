# Data Fetching Process

- user enters search term, presses enter

  - we send network request to Unsplash API
  - sends response of array of objects
  - each object has info about an image

- react has no tools, objects, or functions for making HTTP requests (!!)
- react ONLY cares about showing content and handling user events
- we can write business logic and fetching data without worrying about React
