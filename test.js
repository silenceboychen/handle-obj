const handleObj = require('./index');

const obj = {
  a: 1,
  b: 'bbb',
  c: {
    d: 2,
    e: 'eee',
    f: {
      g: [1,2,3],
      h: {
        i: 'asd',
        j: '43'
      }
    }
  },
  k: {
    l: 1,
    m: ['s','as']
  }
}
console.log(obj);
const result = handleObj(obj);
console.log('===========');
console.log(result);
