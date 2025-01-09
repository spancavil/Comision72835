const fs = require('fs')

const fn = async () => {
  await fs.promises.writeFile(
    './testAsync.txt',
    'Buenas, me ejecuto asíncronamente'
  )
  let result = await fs.promises.readFile('./testAsync.txt', 'utf-8')
  console.log(result)
}

console.log('No se afecta ')
fn()
console.log('el main thread')
