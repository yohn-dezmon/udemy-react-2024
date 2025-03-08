# Organizing files

"Component":

- reusable react component that shows a handful of elements
- Button, ItemShow, ProductList, Dropdown, SearchBar, Checkbox

"Page"

- Still a react component
- not intended to be reused
- e.g. CheckoutPage, ProductPage, LoginPage, LandingPage, RentalPage, CartPage
- a page corresponds to a route

# Hierarchy

App (arguably a Page)

- Button
- Button
- Button (component)

# Grouping by feature (!!)

```
src/
    auth/
        LoginPage.js
        LoginPage.css
        ...
    cart/
        CartPage.js
        CartPage.css
        ...
```

- issue with grouping by feature: what if single component is needed in many locations?
- well why not just use a utils folder and import it? I guess getting react components from one folder
  to another is annoying.

# Groupying by type

- types: components, or pages
- downside: folders can grow to be large
- you can have sub folders within components for catergories

```
src/
    components
        forms
            Input.js
            SearchBar.js
        products
            ProductShow.js
            ProductList.js
    pages
        LoginPage.js
        CartPage.js
        ProductPage.js
```
