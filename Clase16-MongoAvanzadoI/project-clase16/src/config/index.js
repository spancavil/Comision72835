//SOLO VALIDO EN TYPE MODULE
//Usando commonjs __dirname ya está accesible globalmente
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
export const __dirname = join(dirname(__filename), '../../')

export const config = {
  dirname: __dirname,
  PORT: 3006,
  db: {
    connectionString: `mongodb+srv://soancavil3:51ERiCCQnttdtlY0@cluster0.6n7nc.mongodb.net/test_performance?retryWrites=true&w=majority&appName=Cluster0`,
  },
}

console.log(config.dirname)
