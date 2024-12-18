//Promise que siempre resuelve
//Promise que siempre rechaza
//Promise que puede resolver o rechazar
//Promise por fuera de una function
const returnPromise = () => {
  return new Promise((res, rej) => {
    if (Math.random() < 0.5)
    res('Hola')
  })
}

console.log('Hola!')
