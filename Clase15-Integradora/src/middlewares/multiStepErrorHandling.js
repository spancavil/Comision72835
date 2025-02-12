function logErrors(err, req, res, next) {
  console.debug('Paso 1')

  console.error(err.message)
  next(err)
}

function clientErrorHandler(err, req, res, next) {
  console.debug('Paso 2')

  if (req.xhr) {
    res.status(500).send({ error: 'Something failed calling API' })
  } else {
    next(err)
  }
}

function errorHandlerFinalStep(err, req, res, next) {
  console.debug('Paso 3 - final')

  res.status(500)
  res.send({ error: err.message })
}

export { logErrors, clientErrorHandler, errorHandlerFinalStep }
