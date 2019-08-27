// INITIALIZE PORT VARIABLE
require("dotenv").config()

const app = require("./config/express-config")

// INCLUDE THE SEQUELIZE MODEL
const db = require("./models");

// CONNECT TO THE DATABASE AND START THE SERVER
db.sequelize.sync().then(()=>app.listen(process.env.PORT,()=>console.log("App listening on PORT "+process.env.PORT)))