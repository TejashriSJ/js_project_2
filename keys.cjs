function keys(testObject) {
    let arrayOfKeys = [];
    if (!testObject || !(typeof testObject === 'object')) {
        return [];
    } else {
        for (let key in testObject) {
            arrayOfKeys.push(key);
        }
        return arrayOfKeys;
    }
}
module.exports = keys;