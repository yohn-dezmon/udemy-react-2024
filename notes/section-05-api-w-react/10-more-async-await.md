# Reminder for Async/Await

- if you do a `console.log()` right after an async function and you see `Promise` in the console, that's because the request is still processing.
- you have to use `await` when calling the function to prevent the code from proceding before the fn has finished....
