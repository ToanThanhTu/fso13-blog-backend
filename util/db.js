const { Sequelize } = require("sequelize")
const { DATABASE_URL } = require("./config")

const sequelize = new Sequelize(DATABASE_URL)

// For Heroku
// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// })

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate()
    console.log("connected to the database")
  } catch (error) {
    console.log("failed to connect to the database")
    return process.exit(1)
  }

  return null
}

module.exports = {
  connectToDatabase,
  sequelize,
}
