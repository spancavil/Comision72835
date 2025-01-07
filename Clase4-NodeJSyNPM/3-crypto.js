const crypto = require('crypto');

// Datos a firmar
const password = '1234';

// Clave secreta (debe mantenerse en secreto)
const secretKey = 'sjsjxuBSHASd';

// Algoritmo a utilizar (SHA256 es común)
const algorithm = 'sha256';

// Crear el objeto HMAC
//El método createHmac es parte del módulo crypto en Node.js, que se utiliza para crear un objeto Hmac (Hash-based Message Authentication Code). Este objeto se utiliza para generar un código de autenticación de mensaje basado en hash, que se utiliza para verificar la integridad y autenticidad de los datos.
const hmac = crypto.createHmac(algorithm, secretKey);

// Actualizar el HMAC con los datos
hmac.update(password);

// Generar el hash final (a partir del password)
const hash = hmac.digest('hex');

console.log('HMAC generado:', hash);



/* 
IMPORTANTE
No es posible revertir un hash a su texto plano original.

Esta es una de las características fundamentales de las funciones hash criptográficas, como las utilizadas en crypto.createHmac(). Una vez que un dato ha sido hasheado, la información original se pierde de forma irreversible.

¿Por qué no se puede revertir?

Función unidireccional: Las funciones hash son diseñadas para ser unidireccionales. Esto significa que tomar un hash y tratar de obtener el dato original es computacionalmente inviable, incluso con una gran cantidad de poder de cómputo.
Colisiones: Es posible que dos datos diferentes produzcan el mismo hash (aunque es extremadamente improbable con buenos algoritmos hash). Sin embargo, esto no significa que podamos determinar cuál fue el dato original a partir del hash. 

Por lo tanto para almacenar contraseñas de forma segura: En lugar de almacenar contraseñas en texto plano, se almacena su hash. Al momento de verificar una contraseña, se vuelve a calcular el hash y se compara con el almacenado.
*/

const compareInputs = ({hash, input}) => {
    const hmac = crypto.createHmac(algorithm, secretKey);
    hmac.update(input)
    return hmac.digest('hex') === hash
}

console.log(compareInputs({hash, input: '12345'}))