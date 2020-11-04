# hkscs_converter
This is forked from [hkscs_unicode_converter](https://npmjs.org/hkscs_unicode_converter) because it cannot be run in the browser.

This pre-generates the mappings in the build process to avoid `require('fs')` in runtime.

Convert Unicode characters to HKSCS-2016

## Installation

  `npm install hkscs_converter`

## Usage

    const hkscsConverter = require('hkscs_converter');

    const str = hkscsConverter.convertCharacter('');
    const str2 = hkscsConverter.convertString('香');


  Output should be `港` and `香港`


## Tests

  `npm test` or `yarn test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
