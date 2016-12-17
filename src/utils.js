const getValue = (j, node) => {
  switch (node.type) {
    case 'Literal':
      return [j.identifier(node.raw)]
    case 'Identifier':
      return [j.identifier(node.name)]
    case 'ObjectExpression':
      return [j.objectExpression(node.properties)]
    default:
      return [node]
  }
}

export default {
  getValue
}