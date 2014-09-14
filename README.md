# Ember CLI CSS Split

Splits all `*.css` files with more than 4095 selectors into separate files.

If CSSS tree continues to run via `ember serve`, yet no CSS files have changed:

```
file changed adapters/application.js

Build successful - 3944ms.

Slowest Trees                  | Total
-------------------------------+----------------
CSSS                            | 1214ms
```

Select specific files using a glob pattern in your ember `Brocfile.js`:

```js
var app = new EmberApp({
  csssplit: {
    files: ['myapp.css', 'themes/*.css']
  }
});
```

This will allow `broccoli-caching-writer` to skip processing unless the selected CSS files have changed.
