import test from 'ava'

test('expected object literal', (t) => {
  const abc = { a: 'a', b: 'b', c: 'c' }
  t.deepEqual(abc, {a: 'a', b: 'b', c: 'c'})
})

// test('expected object variable', (t) => {
//   const abc = { a: 'a', b: 'b', c: 'c' }
//   const expected = { a: 'a', b: 'b', c: 'c' }
//   t.deepEqual(abc, expected)
// })
