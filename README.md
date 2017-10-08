# Server-side-rendering with marko-path-router

Simple demo to provide Server-side-rendering in combination with [marko-path-router](https://github.com/charlieduong94/marko-path-router).

## Start

```
npm install
npm start
```

## How it works

1. Lasso is used to render a [template file](https://github.com/marko-js-samples/marko-lasso/blob/master/routes/index/template.marko) on the server with express.

2. An `include`-tag is used to add a specific component dynamically according to the requested path on the server. (see `template.marko`).

3. in the `onMount` function (which gets executed on the client) the router is initialized + rendered asynchronously and then replaces the content in the dom accordingly. (see `template.marko`).

## References

For more information click [here](https://github.com/charlieduong94/marko-path-router/issues/2).