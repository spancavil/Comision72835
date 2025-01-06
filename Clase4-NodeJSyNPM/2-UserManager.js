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

const Crypto = require('crypto')

class UsersManager {
    static users = []
    constructor() {}
    addUser = ({ name, lastName, username, password }) => {}
}
