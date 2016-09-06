import test from 'ava'

test('expected literal', (t) => {
  const abc = 'abc'
  t.notRegex(abc, /xyz/)
})

test('expected variable', (t) => {
  const abc = 'a' + 'b' + 'c'
  const expected = /xyz/
  t.notRegex(abc, expected)
})
