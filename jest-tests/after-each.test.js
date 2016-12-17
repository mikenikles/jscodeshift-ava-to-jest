let count = 0

afterEach(() => {
  count += 1
})

test('afterEach has run', () => {
  expect(count).toBe(0)
})

test('afterEach has run', () => {
  expect(count).toBe(1)
})

test('afterEach has run', () => {
  expect(count).toBe(2)
})
