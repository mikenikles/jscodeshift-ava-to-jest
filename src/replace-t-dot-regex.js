import utils from './utils'

const replaceTdotRegex = (j, root) => {
  const tDotIs = root.find(j.MemberExpression, {
    object: {
      name: 't'
    },
    property: {
      name: 'regex'
    }
  })
  tDotIs.forEach(expectation => {
    // Get the entire 't.regex(contents, regex)' expression
    const expectationExpression = expectation.parentPath
    const actualValue = utils.getValue(j, expectationExpression.value.arguments[0])
    const expectedValue = utils.getValue(j, expectationExpression.value.arguments[1])
    const newExpect = j.callExpression(
      j.identifier('expect'),
      actualValue
    )
    const newActual = j.callExpression(
      j.identifier('toMatch'),
      expectedValue
    )
    const newExpression = j.memberExpression(
      newExpect, newActual
    )
    expectationExpression.replace(newExpression)
  })
}

export default replaceTdotRegex