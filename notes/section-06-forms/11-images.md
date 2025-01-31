# images

https://picsum.photos --> this will give us some random photos.

- the last two numbers of the URL control the dimensions of the image
- width, height
- your browser tracks which URLs you are calling, so if it sees that you sent the same URL twice, then it assumes you will want the same content back.
- there's a setting for `Disable cache`...
  - if it's not toggled you'll always get the same imag

https://picsum.photos/seed/<unique-id>/200/300

String interpolation / Back ticks:

- `<img alt="books" src={`https://picsum.photos/seed/${book.id}/200/300`} />`

<!-- Why does the page feel so zoomed in -->
