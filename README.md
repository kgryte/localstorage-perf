Local Storage Performance
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Benchmarks local storage options.


## Installation


## Usage


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/localstorage-perf.svg
[npm-url]: https://npmjs.org/package/localstorage-perf

[travis-image]: http://img.shields.io/travis/kgryte/localstorage-perf/master.svg
[travis-url]: https://travis-ci.org/kgryte/localstorage-perf

[coveralls-image]: https://img.shields.io/coveralls/kgryte/localstorage-perf/master.svg
[coveralls-url]: https://coveralls.io/r/kgryte/localstorage-perf?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/localstorage-perf.svg
[dependencies-url]: https://david-dm.org/kgryte/localstorage-perf

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/localstorage-perf.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/localstorage-perf

[github-issues-image]: http://img.shields.io/github/issues/kgryte/localstorage-perf.svg
[github-issues-url]: https://github.com/kgryte/localstorage-perf/issues
