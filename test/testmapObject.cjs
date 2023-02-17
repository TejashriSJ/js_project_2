const mapObject = require('../mapObject.cjs');
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

let cb = function(val){
    return val+'3'
}

console.log(mapObject(testObject,cb));
