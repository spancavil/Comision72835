export const logger = (req, res, next) => {
  console.log('Pasó por el logger')
  req.unaVariable = { variable: 'un body' }
  next()
}
