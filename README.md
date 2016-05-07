
# deep-iterable

# Requirements

 * Node >= 6.0.0

# Features

 * Traverse several iterables at the same time

# Usage

## Import

```javascript
var ParallelIterable = require('parallel-iterable');
```

## Constructor

```javascript
new ParallelIterable(stop, ...iterables);
```

Where:

 * `stop` is a function which determines when to stop

 * `...iterables` are ECMAScript iterable objects

## Examples

```javascript
var iterables = [
    'abcdef',
    'ghi',
    'jklmnopqrs',
    'tuvwxyz'
];
var {END_OF_FIRST, END_OF_SOME, END_OF_ALL, FOR_COUNT} = ParallelIterable;
var eofirst = [...new ParallelIterable(END_OF_FIRST, ...iterables)];
var eosome = [...new ParallelIterable(END_OF_SOME, ...iterables)];
var eoall = [...new ParallelIterable(END_OF_ALL, ...iterables)];
var firstfive = [...new ParallelIterable(FOR_COUNT(5), ...iterables)];
console.log({eofirst, eosome, eoall});
```
