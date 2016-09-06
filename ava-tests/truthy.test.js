import test from 'ava'

test('expected variable', (t) => {
  const abc = 'a' + 'b' + 'c'
  t.truthy(abc)
})
