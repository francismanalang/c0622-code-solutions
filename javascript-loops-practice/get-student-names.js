/* exported getStudentNames */
// make a variable with an empty array
// make a for loop going through the index of the array at the property 'name'
// push the value of the property name into the array (studentNames)
// return the array from the function
function getStudentNames(students) {
  var studentNames = [];
  for (var i = 0; i < students.length; i++) {
    var names = students[i].name;
    studentNames.push(names);
  }
  return studentNames;
}
