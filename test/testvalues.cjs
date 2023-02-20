const values = require('../values.cjs');

const testObject = 
{
    name: 'Bruce Wayne',
    age: 36,
    location: 'Gotham',
    fun: function () 
    {
        return 'This is a function';
    }
};
console.log(values(testObject));