const fs = require('fs')

const relativePath = './test.txt'

fs.appendFileSync(relativePath, 'Hola!')

if (fs.existsSync(relativePath)) {
  let content = fs.readFileSync(relativePath, 'utf-8')
  console.log(content)
  fs.appendFileSync(relativePath, ' Cómo están?')
  content = fs.readFileSync(relativePath, 'utf-8')
  console.log(content)
}
