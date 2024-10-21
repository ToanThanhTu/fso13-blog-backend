require("dotenv").config()

const { log } = require("console")
const { Sequelize, QueryTypes } = require("sequelize")

// For Heroku
// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// })

const sequelize = new Sequelize(process.env.DATABASE_URL)

const main = async () => {
  try {
    await sequelize.authenticate()
    const blogs = await sequelize.query("SELECT * FROM blogs", {
      type: QueryTypes.SELECT,
    })
    blogs.forEach(blog => {
      log(`${blog.author}: '${blog.title}', ${blog.likes} likes`)      
    })
    sequelize.close()
  } catch (error) {
    console.error("Unable to connect to the database:", error)
  }
}

main()
