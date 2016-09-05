import removeAvaImport from './src/remove-ava-import'
import removeTParameter from './src/remove-t-parameter'
import replaceTdotIsWithExpect from './src/replace-t-dot-is-with-expect'

const transform = (fileInfo, api, options) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  removeAvaImport(j, root)

  // Transform each test
  removeTParameter(j, root)
  replaceTdotIsWithExpect(j, root)

  return root.toSource()
}

export default transform
