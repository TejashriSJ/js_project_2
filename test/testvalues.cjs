const values = require('../values.cjs');
//const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham', fun : function(){
    return 'hii'}}
console.log(values(testObject));