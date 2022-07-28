var dataUl = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log('xhr.status:', xhr.status);
  console.log('xhr.response:', xhr.response);

  for (var i = 0; i < xhr.response.length; i++) {
    var dataLi = document.createElement('li');
    dataLi.textContent = xhr.response[i].name;
    dataUl.appendChild(dataLi);
  }
});
xhr.send();
