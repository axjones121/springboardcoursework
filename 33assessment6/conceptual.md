### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  - There are three ways to manage asynchronous code in JS. There is the Callback method, the Promise method, and the Async/Await method.


- What is a Promise?
  - A Promise object represents the eventual completion, or failure, of an asynchronous operation and its resulting value.

- What are the differences between an async function and a regular function?
  - a async function is a function declared with a async keyword, and the await keyword is premitted within them. It is used a particular method of managing asynchronous code. With a regular function you must use the Promise method to perform asynchronous code. 

- What is the difference between Node.js and Express.js?
  - Express.js is a framework based oon Node.js for which is used for buidling web-applicaitons using the principles of Node. 

- What is the error-first callback pattern?
  - Error-first callback in Node.js is a function which either returns an error object or a successful data response. 

- What is middleware?
  - Express middleware are functions that execute during the lifecycle of a request to the Express server.

- What does the `next` function do?
  - Next is the third parameter in an anonymous callback function within a router function. The next function is the return value and must be called to move onto the error handling portion found in app.use.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```


-Each call requests a promise from github and expects it to be resolved (in sequence) with a value    before moving on to the next call. While this works, it's inefficient because each call doesn't depend on one another (ie the value of joel doesn't care what the value of elie is) so there's no reason to wait for the previous to resolve itself. One way to speed this up is to use Promise.all() to talk to github once in parallel of each other and resolve all promises (regardless of order). Lastly, the results aren't just names of the users but info about each profile. To clarify this, a better variable for each name would be nameResults or nameRes.