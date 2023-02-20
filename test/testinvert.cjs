const invert = require('../invert.cjs');
const testObject = 
{
    name: 'Bruce Wayne',
    age: 36,
    location: 'Gotham'
};

console.log(testObject);
console.log(invert(testObject));
