

var _originalObjects = typeof WeakMap !== 'undefined' ? new WeakMap() : {};

var b = function b() {
  console.log("b");
  var object = _originalObjects.get(this);
  console.log("object:", object);
}

var a = function a() {
  console.log("b");
  b();
}

var Condom = function Condom(object) {
  _originalObjects.set(this, object);
  a.call(this);
  return {3:4};
}

var object = {
  a: 1
};

var condom = new Condom(object);
console.log("condom:", condom);