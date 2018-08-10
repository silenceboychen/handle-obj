## handle-obj

Multi-layer object extraction as a layer.

#### Install

```
$ npm install handle-obj

or

$ yarn add handle.obj
```
#### example:

```
const handleObj = require('handle-obj');

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
const result = handleObj(obj);
console.log(result);
```

#### output:

```
{ 
  a: 1,
  b: 'bbb',
  d: 2,
  e: 'eee',
  g: [ 1, 2, 3 ],
  i: 'asd',
  j: '43',
  l: 1,
  m: [ 's', 'as' ] 
}
```
