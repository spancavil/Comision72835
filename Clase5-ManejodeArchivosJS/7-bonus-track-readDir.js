//Cómo haríamos si quisiéramos leer todas las carpetas de un directorio determinado??
const fs = require('fs')

//Recursividad
const fn = async (dir) => {
  const dirs = await fs.promises.readdir(dir, { withFileTypes: true })
  for (const dir of dirs) {
    if (dir.isDirectory()) {
      //Por aquí hay una trampa...
      console.log(`This is a directory: ${dir.name}`)
      await fn(`${dir.parentPath}/${dir.name}`)
    }
    if (dir.isFile()) {
      console.log(`This is a file: ${dir.name}`)
    }
  }
}

fn('./')

//Propuesta: a partir del código base, generar un lector recursivo del árbol de directorios y archivos, como se muestra a continuación:

/*
(raiz)
package.json (file)
unArchivito.txt (file)
node-modules (dir)
|
----express (dir)
|    |
|    ------info.json (file)
|
-----bcrypt (dir)
     |
     -------main.js (file)
*/
