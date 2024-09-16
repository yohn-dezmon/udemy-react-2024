# CSS Review

- bulma.io --> free CSS styling
    - provides a lot of the boilerplate CSS
    - Docs > Components > Card 

# CSS 

- blocks denoted by {}
- selector denoted by `.selector { }`
- each line in block is a CSS rule (key value pair)
- any HTML elements that want to use a CSS selector will use the `className` attribute/prop 
  - `<div className="selector"> </div>`
- `.card`
  - "go and find all HTML elemtents that have a class of `card`"

# How to add in CSS to our project?


## For CSS Library
1. Download the CSS file, add it to the public folder, add link tag to HTML file
2. Download the CSS file, add to `src/` folder, import it
3. Add link tag to CSS file hosted on a CDN 
4. Install the CSS library using npm, import the CSS file [this is what we'll be using in `pdas/`]


## For Custom CSS
1. Write CSS into a CSS file, add it to the public folder, add link tag to index.html 
2. Write CSS directly into index.html file 
3. Write CSS into a CSS file, place in `src/` folder, import the css file
4. Write SASS, set up CRA to handle your SASS files, import SASS files
5. Install a CSS-in-JS library, Write CSS in your JS files
6. Add style tags to appropriate JSX elements

