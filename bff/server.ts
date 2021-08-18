const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.use(express.json());
require("./src/routes/index")(app);
app.listen(3333);
console.log("read");
