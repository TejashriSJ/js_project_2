
function pairs(testObject){
    
    let arrayOfPairs =[];
    
    if (!testObject || !(typeof testObject === 'object')){
        return [];
    }
    else{
        for(let key in testObject){
            let Pairs =[];
            Pairs.push(key,testObject[key]);
            arrayOfPairs.push(Pairs);
        }
        return JSON.stringify(arrayOfPairs);   
    }
   
   
}
module.exports = pairs;