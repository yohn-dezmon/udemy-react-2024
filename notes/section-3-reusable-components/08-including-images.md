# Including Images

- add `images/` to `src/` directory

```javascript
// include file extension
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
```

- depending on how large an image is, it will be served differently by the development server
- if our image is < 9.7 kb, it gets inlined into the "bundle.js" file
  - it is converted into a base-64 encoded string
- if it's larger, it gets treated as a separate file
  - served as a separate file by development server

```javascript
        <img src={AlexaImage} />
        <img src={CortanaImage} />
        <img src={SiriImage} />
```

- you only need import statements for images if you're including the images as part of your project
- if you're pulling an image from an API (e.g. CDN/S3) then you don't need import statements

```javascript
// this points to a photo hosted somewhere online
<img src="https://picsum.photos/200/300" />
```
