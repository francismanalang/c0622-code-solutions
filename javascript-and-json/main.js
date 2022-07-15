var books = [
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson'
  },
  {
    isbn: '978-0692232699',
    title: 'Build APIs You Won\'t Hate',
    author: 'Phil Sturgeon & Laura Bohill'
  },
  {
    isbn: '978-1491929483',
    title: 'Introduction to JavaScript Object Notation',
    author: 'Lindsay Bassett'
  }
];

console.log('books:', books);
console.log('typeof books:', typeof books);

var booksStringify = JSON.stringify(books);
console.log('JSON.stringify(books):', booksStringify);
console.log('typeof booksStringify:', typeof booksStringify);

var student = '{"id":12345, "name": "Francis Manalang"}';
console.log('student:', student);
console.log('typeof student:', typeof student);

var studentParse = JSON.parse(student);
console.log('JSON.parse(student):', studentParse);
console.log('typeof studentParse:', typeof studentParse);
