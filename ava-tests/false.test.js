import test from 'ava'

test('expected variable false', (t) => {
  const abc = false
  t.false(abc)
})

test('expected variable math calculation', (t) => {
  const abc = 1 > 2
  t.false(abc)
})
