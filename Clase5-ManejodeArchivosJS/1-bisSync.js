function delay(ms) {
  const start = new Date().getTime()
  let current = start
  while (current < start + ms) {
    current = new Date().getTime()
  }
}

console.log('Inicio')
console.log('ejecutando...')
delay(3000)
console.log('Fin')
