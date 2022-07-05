var student = {
  firstName: 'Francis',
  lastName: 'Manalang',
  age: 23
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Mortgage Banker';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previoousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Hydundai',
  model: 'Sonata',
  year: 2013
};

vehicle['color'] = 'blue';
vehicle['isConvertible'] = true;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Bella',
  type: 'Toy poodle'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
