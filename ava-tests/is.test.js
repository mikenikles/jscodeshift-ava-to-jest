import test from 'ava'

test('expected literal', (t) => {
  const abc = 'a' + 'b' + 'c'
  t.is(abc, 'abc')
})

test('expected literal without arrow function parameter brackets', t => {
  const abc = 'a' + 'b' + 'c'
  t.is(abc, 'abc')
})

test('expected variable', (t) => {
  const abc = 'a' + 'b' + 'c'
  const expected = 'abc'
  t.is(abc, expected)
})
