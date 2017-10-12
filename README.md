# mypluralize
A Node.js module that returns the plural form of any noun

## Installation 
    `npm install mypluralize`
## Usage

    ## Javascript
        <code>var pluralise = require('mypluralize');
        var boys = pluralise.getPlural('Boy);</code>

        Output should be <code>'Boys'</code>

    ## TypeScript
        <code>import { getPlural } from 'mypluralize';
        console.log(getPlural('Goose'))</code>

        Output should be <code>'Geese'</code>

## Test 
    `npm run test`
