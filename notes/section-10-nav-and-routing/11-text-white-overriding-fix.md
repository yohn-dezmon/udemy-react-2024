`npm install tailwind-merge`

`import { twMerge } from 'tailwind-merge';`
Button.js

```
  const classes = twMerge(
    className("px-3 py-1.5 border", {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-500 bg-gray-500 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
    })
  );
```
