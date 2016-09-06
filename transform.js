import removeAvaImport from './src/remove-ava-import'
import removeTParameter from './src/remove-t-parameter'
import replaceTdotTruthy from './src/replace-t-dot-truthy'
import replaceTdotFalsy from './src/replace-t-dot-falsy'
import replaceTdotTrue from './src/replace-t-dot-true'
import replaceTdotFalse from './src/replace-t-dot-false'
import replaceTdotIs from './src/replace-t-dot-is'
import replaceTdotNot from './src/replace-t-dot-not'

const transform = (fileInfo, api, options) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  removeAvaImport(j, root)

  // Transform each test
  removeTParameter(j, root)
  replaceTdotTruthy(j, root)
  replaceTdotFalsy(j, root)
  replaceTdotTrue(j, root)
  replaceTdotFalse(j, root)
  replaceTdotIs(j, root)
  replaceTdotNot(j, root)

  return root.toSource()
}

export default transform
