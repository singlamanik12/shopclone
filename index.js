const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.get("/", (req, res, next) => {
//   res.send("Manik Singla");
// });
const rds = require("./Config/rds");
const dynamodb = require("./Config/dynamodb");
app.use(function (req, res, next) {
  req.rds = rds;
  req.dynamodb = dynamodb;
  next();
});

// app.use("/user", require("./routes/user"));

app.listen(process.env.PORT || 9000, () =>
  console.log(`Always watching... on port `)
);
