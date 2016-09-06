import test from 'ava'

test('expected literal', (t) => {
  const abc = 'a' + 'b' + 'c'
  t.not(abc, 'xyz')
})

test('expected variable', (t) => {
  const abc = 'a' + 'b' + 'c'
  const expected = 'xyz'
  t.not(abc, expected)
})
