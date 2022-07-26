function ExampleConstructor() {
  console.log('Value of ExampleConstructor.prototype:', ExampleConstructor.prototype);
  console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);
}

var newExampleConstructor = new ExampleConstructor();
console.log(newExampleConstructor);

var instanceOfExampleConstructor = newExampleConstructor instanceof Object;
console.log(instanceOfExampleConstructor);
