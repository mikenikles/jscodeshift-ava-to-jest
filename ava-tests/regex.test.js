import test from 'ava'

test('expected literal', (t) => {
  const abc = 'abc'
  t.regex(abc, /abc/)
})

test('expected variable', (t) => {
  const abc = 'a' + 'b' + 'c'
  const expected = /abc/
  t.regex(abc, expected)
})
