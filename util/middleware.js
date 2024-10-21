const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" })
}

const errorHandler = (error, req, res, next) => {
  console.error(error.message)

  next(error)
}

module.exports = {
  errorHandler,
  unknownEndpoint,
}
