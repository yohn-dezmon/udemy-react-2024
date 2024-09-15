# Picturing the movement of data

- the ProfileCard component gets called 3 times
- we want to communicate down a `title` and a `handle`
- attribute names are like parameter names for a function, we decide what their names will be
- each Props object has keys/values (prop.keys), (prop.values) like a dictionary in python
-

```javascript
// this doesn't need to be called `props` but is by convention
function ProfileCard(props) {
  return (
    <div>
      <div>Title is {props.title}</div>
      <div>Handle is {props.handle}</div>
    </div>
  );
}

export default ProfileCard;
```
