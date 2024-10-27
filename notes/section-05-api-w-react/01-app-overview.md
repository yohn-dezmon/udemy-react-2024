# App

app name: pics

- google image search type app
- input: user english query
- output: list of images to display on the screen

importing images makes sense when you have static images.

# Proj Overview

# Component Design

- Components: App, SearchBar, ImageList, ImageShow
- we'll have one ImageShow within ImageList
- ImageList displays a list of images
- ImageShow displays a single image
- we'll use map, to create the ImageShow components
- we'll make a `src/components/` directory
- `App.js` does make a component
