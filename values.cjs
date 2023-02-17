function values(testObject){
    let arrayOfValues=[];
    
    
    if (!testObject || !(typeof testObject === 'object')){
        return [];
    }
    else{
        for(let key in testObject){
            if (typeof testObject[key] !== 'function'){
                arrayOfValues.push(testObject[key]);
            }    
        }
        return arrayOfValues;
    }
    }
    module.exports = values;