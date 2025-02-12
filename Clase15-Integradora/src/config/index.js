//SOLO VALIDO EN TYPE MODULE
//Usando commonjs __dirname ya está accesible globalmente
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
//Librería dotenv es para importar correctamente las variables de entorno

const __filename = fileURLToPath(import.meta.url)
export const __dirname = join(dirname(__filename), '../../')

//ejemplo de uso de variable de entorno (para datos sensibles)
// const userName = process.env.userMongoDB

export const config = {
  dirname: __dirname,
  PORT: 3006,
  db: {
    //coderhouse será la base de datos a la cual se conectará
    connectionString: `mongodb+srv://root:ATisyKd4TcQmaQYF@cluster0.vchky.mongodb.net/coderhouse?retryWrites=true&w=majority&appName=Cluster0`,
  },
}

console.log(config.dirname)
