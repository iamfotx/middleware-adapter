import rimraf from 'rimraf'
import path from 'path'
import {getChildDirsName} from '../shared/get-child-dirs-name.js'

const rootDir = process.cwd()
const foldersToRemove = process.argv.slice(2)

// Dirs to clean
const packages = path.join(rootDir, 'packages')
const scripts = path.join(rootDir, 'scripts')

const pathsToClean = [packages, scripts]
  .map(dir => {
    const childDirs = getChildDirsName(dir)
    return childDirs.map(childDir => {
      return path.join(dir, childDir)
    })
  })
  .flat()

// clean the root also
pathsToClean.push(rootDir)

// paths to run rimraf on
const actualPathsToDelete = pathsToClean
  .map(dir => {
    return foldersToRemove.map(folder => {
      return path.join(dir, folder)
    })
  })
  .flat()

actualPathsToDelete.forEach(pathToDelete => {
  rimraf(pathToDelete, {}, e => {
    if (e) {
      throw new Error(e)
    }
  })
})
