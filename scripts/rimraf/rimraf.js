const rimraf = require('rimraf')
const path = require('path')
const getChildDirsName = require('../shared/get-child-dirs-name')

const fullPathToPackages = path.join(process.cwd(), 'packages')
const dirsNameWithinPackages = getChildDirsName(fullPathToPackages)
const folderNamesToRemove = process.argv.slice(2)

const pathsToDelete = dirsNameWithinPackages
  .map(dir =>
    folderNamesToRemove.map(folderNameToRemove =>
      path.join(dir, folderNameToRemove),
    ),
  )
  .flat()
  .map(modifiedPath => path.join(process.cwd(), 'packages', modifiedPath))

pathsToDelete.forEach(pathToDelete => {
  rimraf(pathToDelete, {}, e => {
    if (e) {
      throw new Error(e)
    }
  })
})
