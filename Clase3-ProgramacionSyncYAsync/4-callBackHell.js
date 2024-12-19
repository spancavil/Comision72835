/* function obtenerUsuario(id, callback) {
  // Simula una petición asíncrona a una API
  setTimeout(() => {
    const usuario = { id, nombre: 'Juan', apellido: 'Pérez' }
    callback(usuario)
  }, 1000)
}

function obtenerPublicaciones(usuario, callback) {
  // Simula otra petición asíncrona
  setTimeout(() => {
    const publicaciones = ['Publicación 1', 'Publicación 2']
    callback(publicaciones)
  }, 500)
}

function mostrarPublicaciones(publicaciones) {
  console.log(publicaciones)
}

//Son funciones anónimas anidadas.
obtenerUsuario(1, (usuario) => {
  obtenerPublicaciones(usuario, (publicaciones) => {
    mostrarPublicaciones(publicaciones)
  })
}) */

//Resolución con promises
function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    reject("Oops ha ocurrido un error")
    setTimeout(() => {
      const usuario = { id, nombre: 'Juan', apellido: 'Pérez' };
      resolve(usuario);
    }, 1000);
  });
}

function obtenerPublicaciones(usuario) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const publicaciones = ['Publicación 1', 'Publicación 2'];
      resolve(publicaciones);
    }, 500);
  });
}

function mostrarPublicaciones(publicaciones) {
  console.log(publicaciones)
}

/* obtenerUsuario(1)
  .then(usuario => obtenerPublicaciones(usuario))
  .then(publicaciones => mostrarPublicaciones(publicaciones))
  .catch(error => console.error(error)); */

(async ()=> {
  try {
    const user = await obtenerUsuario(1)
    const publicaciones = await obtenerPublicaciones(user)
    mostrarPublicaciones(publicaciones)
  } catch (error) {
    console.log(error); 
  }
})()

