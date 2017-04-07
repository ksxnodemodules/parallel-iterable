
((module) => {
  'use strict'

  var ParallelIterableSuper = require('x-iterable-utils/appx-super-class.js')(build, iterate)

  var iterable = Symbol.iterator

  class ParallelIterable extends ParallelIterableSuper {
    static END_OF_FIRST ([{done}]) {
      return done
    }

    static END_OF_SOME (elements) {
      return elements.some(({done}) => done)
    }

    static END_OF_ALL (elements) {
      return elements.every(({done}) => done)
    }

    static FOR_COUNT (count) {
      return (elements) => !(count--)
    }
	}

  module.exports = ParallelIterable

  function build (self, stop, ...iterables) {
    self.stop = stop
    self.iterables = iterables
  }

  function * iterate () {
    var iterators = this.iterables.map((iterable) => iterable[iterable]())
    for (; ;) {
      var elements = iterators.map((iterator) => iterator.next())
      if (this.stop(elements, this)) {
        break
      } else {
        yield elements.map(({value}) => value)
      }
    }
  }
})(module)
