# urlify
Convert strings to simple, hyphen-separated, URL-friendly fragments.

Properties of the resulting string:

* it contains only alphanumeric characters and hyphens
* consecutive non-alphanumeric characters are converted into a single joining hyphen
* non-alphanumeric characters that begin or end the string are ignored

## Examples

```js
urlify('Hello, St. Louis!'); // => hello-st-louis
```

You might use it like this:

```js
const urlify = require('urlify');

const title = 'Cats Break the Internet (again)!';
const text = '...';
const url = `/blog/${urlify(title)}.html`; // /blog/cats-break-the-internet-again.html

const blog = {title, text, url};
//...
```

## Install
This package is not yet on the NPM registry, but you can still use it like so:

```sh
npm install git://github.com/akivajgordon/urlify.git
```

The previous command will install the latest release. You can also specify a release:

```sh
npm install git://github.com/akivajgordon/urlify.git#v0.1.0
```

## Contributing
Contributions are welcome!

### Getting Started

Fork & clone the repository. From inside the project folder:
```sh
npm install
```

### Test

This package includes Jasmine unit tests. Please include unit tests when adding or fixing functionality.

To run the tests:

```sh
npm test
```
