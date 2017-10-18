[![Build Status](https://travis-ci.org/philipszdavido/mypluralize.svg?branch=master)](https://travis-ci.org/philipszdavido/mypluralize)
[![Coverage Status](https://coveralls.io/repos/github/philipszdavido/mypluralize/badge.svg?branch=master)](https://coveralls.io/github/philipszdavido/mypluralize?branch=master)
[![npm version](https://badge.fury.io/js/badgess.svg)](http://badge.fury.io/js/badgess)
[![npm downloads](https://img.shields.io/npm/dm/badgess.svg)](https://img.shields.io/npm/dm/badgess.svg)
[![NPM](https://nodei.co/npm/badgess.png)](https://nodei.co/npm/badgess/)
# mypluralize
A Node.js module that returns the plural form of any noun

## Installation 
```sh
npm install mypluralize --save
yarn add mypluralize
bower install pluralize --save
```

## Usage

### JavaScript

```javascript
var pluralise = require('mypluralize');
var boys = pluralise.getPlural('Boy');
console.log(boys);
```
```sh
Output should be 'Boys'
```

### TypeScript
```typescript
import { getPlural } from 'mypluralize';
console.log(getPlural('Goose'))
```
```sh
Output should be 'Geese'
```

### AMD
```javascript
define(function(require,exports,module){
  var pluralise = require('mypluralize');
});
```

## Test 
```sh
npm run test
```
