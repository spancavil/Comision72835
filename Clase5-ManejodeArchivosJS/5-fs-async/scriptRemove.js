const fs = require('fs')

const relativePath = './testAsync.txt'

const fn = async () => {
  try {
    if (fs.existsSync(relativePath)) {
      await fs.promises.unlink(relativePath)
    }
  } catch (error) {
    console.error(error)
  }
}

console.log('No se afecta ')
fn()
console.log('el main thread')
