
function mapObject(testObject,cb){
    
    if (!testObject || !(typeof testObject === 'object')){
        return [];
    }
    else{
        for ( let key in testObject){
            testObject[key] = cb(testObject[key])
        }
        return testObject
    }
    }
    module.exports = mapObject;