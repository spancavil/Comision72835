/* 
Escribir un programa ejecutable bajo node.js que realice las siguientes acciones:
Abra una terminal en el directorio del archivo y ejecute la instrucción: 
    npm init -y

Esto creará un archivo especial (lo veremos más adelante) de nombre package.json
Lea el archivo package.json y declare un objeto con el siguiente formato y datos:
    const info = {
        contenidoStr: (contenido del archivo leído en formato string),
        contenidoObj: (contenido del archivo leído en formato objeto),
        size: (tamaño en bytes del archivo)
    }

Requisitos:
    Muestre por consola el objeto info luego de leer el archivo
    Guardar el objeto info en un archivo llamado info.json dentro de la misma carpeta de package.json
    Incluir el manejo de errores (con throw new Error)
    Utilizar el módulo promises de fs dentro de una función async/await y utilizar JSON.stringify + JSON.parse para poder hacer las transformaciones json->objeto y viceversa
*/

const fs = require('fs')
const fn = async () => {
  try {
    //Desarrollo
    /*  let json = await fs.promises.readFile('./package.json', 'utf-8')
    let data = JSON.parse(json)
    console.log(data)
    const dto = {
      dataString: json,
      dataParsed: data,
      size: json.length,
    }
    console.log(dto.size)

    const dtoStringified = JSON.stringify(dto, null, '\t')
    await fs.promises.writeFile('./info.json', dtoStringified) */
  } catch (error) {
    console.log(`Error en la operación de archivos: ${error.message}`)
  }
}

console.log('No se afecta ')
fn()
console.log('el main thread')
