
# args-from

Turn `package.json` fields into a string of command arguments:

```sh
node-sass $(args-from sass)
```

Then,

```js
{
  "name": "my-app",
  "author": "Jamen Marz",
  // ...
  "sass": {
    "_input": "src/app.scss",
    "output": "dist/"
  }
}
```

## Install

```
npm i -D args-from
```

## Usage

### `args-from <field>`

For example:

```sh
node-sass $(args-from sass)
node-sass foo.scss $(args-from scss) trailing
```


Any keys with `_` become command input.  For example:

```
"scss": {
  "_input": "src/app.scss",
  "output": "dist/"
}
```

Would procude:

```sh
node-sass src/app.scss --output=dist
```
