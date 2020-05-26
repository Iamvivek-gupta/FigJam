const express = require('express');
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
const tourRouter = require("./routes/tourRoutes");

const swaggerJsDoc = require("swagger-jsdoc");

const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
 
// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name: "Amazing Developer"
      },
      servers: ["http://localhost:5000"]
    }
  },
  // ['.routes/*.js']
  apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
 
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerDocs));
// 3) TO READ CONFIG VARIABLES
dotenv.config({ path: "./config.env" });
console.log(app.get('env'))




// DATABASE CONNECTION

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    //console.log(con.connections);
    console.log("databas connected");
  })
  .catch((error) => {
    console.log(error);
  });




// 1) MIDDLEWARE
// if(process.env.NODE_ENV === 'development'){
//   app.use(morgan("dev"));
// }
app.use(morgan("dev"));
app.use("/api/v1/tours", tourRouter);

// 4) START SERVERS
const port = process.env.PORT || 5000;

app.listen(port, () =>{
    console.log(`server listening on port ${port}`)
})