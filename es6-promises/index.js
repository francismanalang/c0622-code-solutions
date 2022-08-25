const takeAChance = require('./take-a-chance');
const promiseObject = takeAChance('Francis');

promiseObject
  .then(value => console.log(value))
  .catch(error => console.error(error.message));
