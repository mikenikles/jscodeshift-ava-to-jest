const removeAvaImport = (j, root) => {
  const avaImportCall = root.find(j.ImportDeclaration, {
    source: {
      value: 'ava'
    }
  })

  avaImportCall.forEach(p => {
    j(p).remove()
  })
}

export default removeAvaImport