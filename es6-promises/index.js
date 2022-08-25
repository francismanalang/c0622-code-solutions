const takeAChance = require('./take-a-chance');
const promiseObject = takeAChance('Francis');

promiseObject.then(value => {
  console.log(value);
});

promiseObject.catch(Error => {
  console.error(Error.message);
});
