require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());



//routes
const allRoutes = require("./routes");
const serverNotFound = require("./utils/server-not-found");
//db


const connectDB=require('./db/connect')
const authenticateUser = require('./middlewares/authentication')
// error handler
// const notFoundMiddleware = require('./middleware/not-found');
// const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());
// extra packages


app.use("/api/v1", allRoutes);
app.use(serverNotFound);


// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await(connectDB(process.env.MONGO_URI))
    console.log("Datatbase connected...")
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();