# Unsplash API

- sign up for an account
- create an 'app' to get an Access Key
- Take a look at docs to understand the request the request we will make

- account is yohn_dezmon or (johndesmond631@gmail.com)
  access keys in ./keys-for-pics.txt

# Documentation (Unsplash)

- Schema > Location
  - https://api.unsplash.com/
- Authorization > Public authentication
  - header: Authorization: Client-ID <KEY>
- Search > Search photos
  - GET /search/photos
    - query=<terms>

https://api.unsplash.com/search/photos?query=oceans
