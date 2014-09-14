# Split Your CSS With Broccoli

Pass your tree to broccoli-csssplit and it will split any
file (eg. foo.css) with more than 4095 selectors into separate files.

If CSSS continues to run when no CSS files have changed, select specific files using a glob pattern:

```js
// Brocfile.js
var app = new EmberApp({
  csssplit: {
    files: ['myapp.css', 'themes/*.css']
  }
});
```

This will allow `broccoli-caching-writer` to skip processing unless the selected CSS files have changed.
