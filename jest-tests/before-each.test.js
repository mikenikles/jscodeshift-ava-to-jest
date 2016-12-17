let count = 0

beforeEach(() => {
  count += 1
})

test('beforeEach has run', () => {
  expect(count).toBe(1)
})

test('beforeEach has run', () => {
  expect(count).toBe(2)
})
