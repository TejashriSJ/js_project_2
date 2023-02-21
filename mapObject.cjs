function mapObject(testObject, callBackFunction) {
  if (!testObject || !(typeof testObject === "object")) {
    return [];
  } else {
    for (let key in testObject) {
      testObject[key] = callBackFunction(testObject[key], key, testObject);
    }
    return testObject;
  }
}
module.exports = mapObject;
