# jQuery table split

Split a table into two tables.

## Requirements

Requires [`jquery-tableslice`][tableslice].

## Installing

With [Bower][bower]:

```sh
$ bower install --save jquery-tableslice jquery-tablesplit
```

## Example

```js
var $split = $('.example').tableSplit(3);
var $left = $split.eq(0);
var $right = $split.eq(1);
```

## Usage

```js
$('table').tableSplit(index[, options]);
```

`$.fn.tableSplit()` returns a collection of two tables, each containing the columns before and after
the split index.

### Options

Options are passed through to `jquery-tableslice` ([documentation][options]).

## License

[MIT license](LICENSE).

[bower]: http://bower.io/
[tableslice]: https://github.com/j-/jquery-tableslice
[options]: https://github.com/j-/jquery-tableslice#options