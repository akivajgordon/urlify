# urlify
Convert strings to simple, hyphen-separated, URL-friendly fragments.

Properties of the resulting string:

* it contains only alphanumeric characters and hyphens
* consecutive non-alphanumeric characters are converted into a single joining hyphen
* non-alphanumeric characters that begin or end the string are ignored

## Examples

```
urlify('Hello, St. Louis!'); // => hello-st-louis
```
