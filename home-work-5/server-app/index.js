/// require lodash

const _ = require('lodash');

const arr = ['a', 'b', 'c', 'd'];

console.log(_.chunk(arr, 2)); // [ [ 'a', 'b' ], [ 'c', 'd' ] ]

const users = {
    'barney':  { 'age': 36, 'active': true },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true },
  };
   
console.log(_.findKey(users, function(o) { return o.age < 40; })); // barney
