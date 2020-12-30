const express = require("express");
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: "*"
}))

// DB Connection
require("./db");

// Models

// Routes calls
app.use('/', require('./routes/user'));


app.listen(3000, () => {
  console.log("Server listen at port 3000!");
});
