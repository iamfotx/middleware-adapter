import rimraf from 'rimraf'
import path from 'path'
import {getChildDirsName} from '../shared/get-child-dirs-name.js'

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
