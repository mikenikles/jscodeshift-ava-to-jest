import utils from './utils'

const replaceTdotIsWithExpect = (j, root) => {
  const tDotIs = root.find(j.MemberExpression, {
    object: {
      name: 't'
    },
    property: {
      name: 'is'
    }
  })
  tDotIs.forEach(expectation => {
    // Get the entire 't.is(actual, expected)' expression
    const expectationExpression = expectation.parentPath
    const actualValue = utils.getValue(expectationExpression.value.arguments[0])
    const expectedValue = utils.getValue(expectationExpression.value.arguments[1])
    const newExpect = j.callExpression(
      j.identifier('expect'),
      [j.identifier(actualValue)]
    )
    const newActual = j.callExpression(
      j.identifier('toBe'),
      [j.identifier(expectedValue)]
    )
    const newExpression = j.memberExpression(
      newExpect, newActual
    )
    expectationExpression.replace(newExpression)
  })
}

export default replaceTdotIsWithExpect