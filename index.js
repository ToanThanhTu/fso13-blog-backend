const { log } = require("console")

const express = require("express")
require("express-async-errors")
const app = express()

const { PORT } = require("./util/config")
const { connectToDatabase } = require("./util/db")

const blogsRouter = require("./controllers/blogs")
const { errorHandler, unknownEndpoint } = require("./util/middleware")

app.use("/api/blogs", blogsRouter)

app.use(unknownEndpoint)
app.use(errorHandler)

const start = async () => {
  await connectToDatabase()
  app.listen(PORT, () => {
    log(`Server running on port ${PORT}`)
  })
}

start()
