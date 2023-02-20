const defaults = require('../defaults.cjs');

const testObject = 
{
    name: 'Bruce Wayne',
    age: 36,
    location: 'Gotham'
};

const defaultProps = 
{
    name: 'Tejashri',
    Company: 'Mount Blue'
};

console.log(defaults(testObject, defaultProps));
