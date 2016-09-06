import utils from './utils'

const replaceTdotDeepEqual = (j, root) => {
  const tDotIs = root.find(j.MemberExpression, {
    object: {
      name: 't'
    },
    property: {
      name: 'deepEqual'
    }
  })
  tDotIs.forEach(expectation => {
    // Get the entire 't.deepEqual(actual, expected)' expression
    const expectationExpression = expectation.parentPath
    const actualValue = utils.getValue(expectationExpression.value.arguments[0])
    const expectedValue = utils.getValue(expectationExpression.value.arguments[1])
    const newExpect = j.callExpression(
      j.identifier('expect'),
      [j.identifier(actualValue)]
    )
    const newActual = j.callExpression(
      j.identifier('toEqual'),
      [j.objectExpression(expectedValue)]
    )
    const newExpression = j.memberExpression(
      newExpect, newActual
    )
    expectationExpression.replace(newExpression)
  })
}

export default replaceTdotDeepEqual