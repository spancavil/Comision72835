const fs = require('fs')

const relativePath = './test.txt'

fs.writeFileSync(relativePath, 'Hola!')

if (fs.existsSync(relativePath)) {
  let content = fs.readFileSync(relativePath)
  console.log(content)
}
