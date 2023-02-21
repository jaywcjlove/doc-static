<h3 id='req.originalUrl'>req.originalUrl</h3>

<div class="doc-box doc-notice" markdown="1">
`req.url` is not a native Express property, it is inherited from Node's [http module](https://nodejs.org/api/http.html#http_message_url).
</div>

This property is much like `req.url`; however, it retains the original request URL,
allowing you to rewrite `req.url` freely for internal routing purposes. For example,
the "mounting" feature of [app.use()](#app.use) will rewrite `req.url` to strip the mount point.

```js
// GET /search?q=something
console.dir(req.originalUrl)
// => "/search?q=something"
```

`req.originalUrl` is available both in middleware and router objects, and is a
combination of `req.baseUrl` and `req.url`. Consider following example:

```js
// GET 'http://www.example.com/admin/new?sort=desc'
app.use('/admin', (req, res, next) => {
  console.dir(req.originalUrl) // '/admin/new?sort=desc'
  console.dir(req.baseUrl) // '/admin'
  console.dir(req.path) // '/new'
  next()
})
```
