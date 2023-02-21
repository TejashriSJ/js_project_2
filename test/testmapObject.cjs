const mapObject = require("../mapObject.cjs");
const testObject = {
  name: "Bruce Wayne",
  age: 36,
  location: "Gotham",
};

let callBackFunction = function (val, key, testObject) {
  return val + "3";
};

console.log(mapObject(testObject, callBackFunction));
