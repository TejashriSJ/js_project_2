
function defaults(testObject, defaultProps) {

    if (!testObject || !(typeof testObject === 'object')) {
        return [];
    } else {

        for (let defaultPropsKey in defaultProps) {

            if ((defaultPropsKey in testObject === false)) {

                testObject[defaultPropsKey] = defaultProps[defaultPropsKey];
            }
        }
        return testObject;
    }
}
module.exports = defaults;