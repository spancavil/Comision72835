export const logger = (req, res, next) => {
  console.debug(req.body)
  console.debug({ ms: Date.now() })
  next()
}
