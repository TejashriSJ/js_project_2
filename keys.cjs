function keys(testObject){
let arrayOfKeys=[];

//Object.keys()
//_.keys(object)

if (!testObject || !(typeof testObject === 'object')){
    return []
}
else{
    for(let key in testObject){
        arrayOfKeys.push(key);
    }
    return arrayOfKeys;
}
}
module.exports = keys;