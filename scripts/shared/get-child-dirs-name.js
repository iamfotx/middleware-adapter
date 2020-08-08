const fs = require('fs')

function getChildDirsName(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + '/' + file).isDirectory()
  })
}

module.exports = getChildDirsName
