import test from 'ava'

test('expected variable true', (t) => {
  const abc = true
  t.true(abc)
})

test('expected variable math calculation', (t) => {
  const abc = 2 > 1
  t.true(abc)
})
