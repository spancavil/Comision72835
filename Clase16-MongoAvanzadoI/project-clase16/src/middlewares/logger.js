export const logger = (req, res, next) => {
  console.info(`Incoming request: ${new Date().toISOString()}`)
  console.info({
    method: req.method,
    url: req.url,
    ip: req.ip || 'undefined IP',
  })
  next()
}
