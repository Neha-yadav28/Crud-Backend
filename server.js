const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");  // to make api accessiblr to frontend
const stuRouter=require('./app/routes/student.routes')
const app = express();

app.use(cors())

app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync({force:false})
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });



app.use('/students',stuRouter)

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});