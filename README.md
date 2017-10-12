[![Build Status](https://travis-ci.org/philipszdavido/mypluralize.svg?branch=v1.0.0)](https://travis-ci.org/philipszdavido/mypluralize)

[![Coverage Status](https://coveralls.io/repos/github/philipszdavido/mypluralize/badge.svg?branch=master)](https://coveralls.io/github/philipszdavido/mypluralize?branch=master)
# mypluralize
A Node.js module that returns the plural form of any noun

## Installation 
```sh
npm install mypluralize
```

## Usage

### Javascript

```javascript
var pluralise = require('mypluralize');
var boys = pluralise.getPlural('Boy');

Output should be 'Boys'
```

### TypeScript
```javscript
import { getPlural } from 'mypluralize';
console.log(getPlural('Goose'))

Output should be 'Geese'
```
## Test 
```sh
npm run test
```
