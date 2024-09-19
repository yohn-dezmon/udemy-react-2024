# App Logic

- each time we hit add animal, we want to show an additional animal picture
- the animal displayed should be picked at random
- we'll have a list of set animals

# Component hierarchy

- App Component (parent)
- `animals` state --> this will be an array by default
- we'll add names of animals into the `animals` array
- for each string, we'll show a new AnimalShow component 
- we'll pass a prop called `type` that has a value of the string stored in `animals`

