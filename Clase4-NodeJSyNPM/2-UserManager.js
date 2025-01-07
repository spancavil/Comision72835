/* ¿Cómo lo hacemos? Se creará una clase “UsersManager” que permitirá guardar usuarios en un atributo estático. El usuario se recibirá con una contraseña en string plano, y se deberá guardar la contraseña hasheada con crypto. Utilizar el módulo nativo crypto.
    El manager debe contar con los siguientes métodos:
    El método “Crear usuario” debe recibir un objeto con los campos:
        Nombre
        Apellido
        Nombre de usuario
        Contraseña
    El método debe guardar un usuario en un atributo estático llamado “Usuarios”, recordando que la contraseña debe estar hasheada por seguridad 
    El método “Mostrar Usuarios” imprimirá en consola todos los usuarios almacenados.
    El método “Validar Usuario” recibirá el nombre de usuario que quiero validar, seguido de la contraseña,  debe poder leer el json previamente generado con el arreglo de usuarios y hacer la comparación de contraseñas, Si coinciden el usuario y la contraseña, devolver un mensaje “Logueado”, caso contrario indicar error si el usuario no existe, o si la contraseña no coincide.
*/

const crypto = require('crypto')
// Clave secreta (debe mantenerse en secreto)
const secretKey = 'sjsjxuBSHASd';
// Algoritmo a utilizar (SHA256 es común)
const algorithm = 'sha256';

class UsersManager {
    static users = []
    constructor() {}
    addUser = ({ name, lastName, username, password }) => {        
        // Crear el objeto HMAC
        const hmac = crypto.createHmac(algorithm, secretKey);
        // Actualizar el HMAC con los datos
        hmac.update(password);
        // Generar el hash final (a partir del password)
        const hash = hmac.digest('hex');
        //Generamos el objeto user (DTO)
        const user = {
            name, lastName, password: hash, username
        }

        UsersManager.users.push(user)
    }
    validateUser = ({ username, password}) => {
        //Validad que exista el user y que la contraseña sea correcta
        const userExists = UsersManager.users.find(user => user.username === username)
        if (!userExists) return "Usuario o contraseña invalidos"

        const isPasswordEqual = this.#compareInputs({hash: userExists.password, input: password})
        if (!isPasswordEqual) return "Usuario o contraseña invalidos"

        return "Usuario loggeado"
    }
    
    //Funcion privada
    #compareInputs = ({hash, input}) => {
        const hmac = crypto.createHmac(algorithm, secretKey);
        hmac.update(input)
        return hmac.digest('hex') === hash
    }
}

const userManager = new UsersManager()

userManager.addUser({name: "Andres", lastName: "Holsbach", username: "ahols", password: "ABC897"})

console.log(userManager.validateUser({username: "ahols", password: "ABC897H"}))

