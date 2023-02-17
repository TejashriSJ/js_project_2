
function invert(testObject){  
    let invertedObject ={};
    
    if (!testObject || !(typeof testObject === 'object')){
        return []
    }
    else{
        for(let key in testObject){
            invertedObject[testObject[key]] = key;
        }
        return invertedObject;   
    }
}
module.exports = invert;