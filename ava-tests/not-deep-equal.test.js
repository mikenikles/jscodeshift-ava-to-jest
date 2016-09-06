import test from 'ava'

test('expected object literal', (t) => {
  const abc = { a: 'a', b: 'b', c: 'c' }
  t.notDeepEqual(abc, {a: 'x', b: 'y', c: 'z'})
})

test('expected object variable', (t) => {
  const abc = { a: 'a', b: 'b', c: 'c' }
  const expected = { a: 'x', b: 'y', c: 'z' }
  t.notDeepEqual(abc, expected)
})
