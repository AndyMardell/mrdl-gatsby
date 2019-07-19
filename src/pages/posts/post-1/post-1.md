---
path: "/posts/cleaner-error-handling-javascript"
date: "2019-07-19"
title: "Cleaner Error Handling Techniques in Javascript"
---

[[intro]]
| Error handling in Javascript isn't all that hard to get the hang of. But you might be overwhelmed with techniques and you might find that, like me, you find yourself repeating the same old error handling techniques over and over, bulking out your app in the mean time.

<!-- readmore -->

The common techniques, which you may already know, can get bulky and long winded, and nobody wants that. Lets say you've written this nice, clean, and very simple async function:

```js
const foo = async () => {
  const data = await getData()
  return data
}

foo()
```

In this example, if _getData_ were to throw an error, it would result in an unhandled error exception. In order to handle the error correctly, you can wrap your sexy code in a very unsexy try/catch block:

```js
const foo = async () => {
  try {
    const data = await getData()
    return data
  } catch (err) {
    console.log(err)
  }
}

foo()
```

This doubles the lines of code you've written and, throughout your app, you'll likely find yourself writing the same try/catch blocks over, and over again. Here are 2 alternative error handling methods you might want to adopt in your next app.

> Try/catch blocks are ugly.

## Method 1: async catch

In case you didn't know, an async function returns a promise. It either returns a resolved promise, or a rejection (error). With that in mind, we can use a `.catch()` handler on any async function, just like a promise then/catch.

```js
const bar = async () => {
  return 'This will return a promise'
}

bar().catch(err => console.log(err))
```

All we're doing is calling the _bar_ function, and logging any errors by appending `.catch()`. Lets apply this to our _foo_ function:

```js
const foo = async () => {
  const data = await getData()
  return data
}

foo().catch(err => console.log(err))
```

If _getData_ were to throw an error, the error will be passed down the chain to our _foo_ function and, in turn, logged via the catch we appended to _foo_. This is a nice, shorter alternative to try/catch, and you can easily pass the error to a global error handler such as:

```js
const errorHandler = (err) => {
  console.log(err)
  informUserOfError(err.message)
}

const foo = async () => {
  const data = await getData()
  return data
}

foo().catch(errorHandler)
```

You can now import and reuse your global _errorHandler_ with the short catch function `.catch(errorHandler)` on any async function call in your app.

## Method 2: Higher order function

A higher order function is a function which is passed a function and returns a function. That's a lot to take in so here's an example:

```js
// This is our higher order error handler
const handleErrors = (fn) => {
  // The handler passes our existing parameters to a new function
  return (...params) => {
    // Appends a catch and returns the new function
    return fn(...params).catch(err => {
      console.error(err)
    })
  }
}
```

Now you can call your _foo_ async function and wrap it in this higher order function. This will take the function, append `.catch` to it, and return the function for use. Lets apply this to our _foo_ function:

```js
const foo = async () => {
  const data = await getData()
  return data
}

handleErrors(foo)()
```
Here, we call our async _foo_ function, wrap the call in a _handleErrors_ function, which returns our _foo_ function with `.catch` appended to it. If this function were to throw an error, it will be passed down to our catch and handled however we want.

In order to pass parameters to your _foo_ function, you can do the following:

```js
const foo = async (id) => {
  const data = await getData(id) // getData(12)
  return data
}

handleErrors(foo)(12)
```

For clarity, this is equivalent to:

```js
const foo = async (id) => {
  const data = await getData(id) // getData(12)
  return data
}

foo(12)
```

Except this doesn't handle errors thrown by our _foo_ or _getData_ functions.
