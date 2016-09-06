import utils from './utils'

const replaceTdotNotRegex = (j, root) => {
  const tDotIs = root.find(j.MemberExpression, {
    object: {
      name: 't'
    },
    property: {
      name: 'notRegex'
    }
  })
  tDotIs.forEach(expectation => {
    // Get the entire 't.notRegex(contents, regex)' expression
    const expectationExpression = expectation.parentPath
    const actualValue = utils.getValue(j, expectationExpression.value.arguments[0])
    const expectedValue = utils.getValue(j, expectationExpression.value.arguments[1])
    const newExpect = j.callExpression(
      j.identifier('expect'),
      actualValue
    )
    const not = j.identifier('not')
    const newExpectNot = j.memberExpression(
      newExpect, not
    )
    const newActual = j.callExpression(
      j.identifier('toMatch'),
      expectedValue
    )
    const newExpression = j.memberExpression(
      newExpectNot, newActual
    )
    expectationExpression.replace(newExpression)
  })
}

export default replaceTdotNotRegex