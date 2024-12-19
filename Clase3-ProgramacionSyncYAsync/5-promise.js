//Promise que siempre resuelve
//Promise que siempre rechaza
//Promise que puede resolver o rechazar
//Promise por fuera de una function

const promise = new Promise((resolve, reject) => {
  //Código interno de la promise. Por ejemplo puede ser una conexión con la base de datos
  if (Math.random() > 0.5) {
    resolve('Hola')
  }
  reject('Chau')
})

promise
  .then((response) => console.log({response}))
  .catch(err => console.log(err))
  .finally(() => {
    //Cerrar conexiones a bases de datos.
    //Limpiar estados
    console.log("Se ejecuta siempre al final de la promesa")
  })

console.log("Hola ue tal");

