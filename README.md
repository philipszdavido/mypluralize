# mypluralize
A Node.js module that returns the plural form of any noun

## Installation 
    `npm install mypluralize`
## Usage

    # Javascript
        var pluralise = require('mypluralize');
        var boys = pluralise.getPlural('Boy);

        Output should be 'Boys'

    # TypeScript
        import { getPlural } from 'mypluralize';
        console.log(getPlural('Goose'))

        Output should be 'Geese'

## Test 
    `npm run test`