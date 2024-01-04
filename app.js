const express = require("express");
const app = express();
const port = 2000;
const router = require("./Router/router");

// const ejs=require('ejs')
app.use(router);
app.set("view engine", "ejs");
// console.log(app.get("view engine"))

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

console.log();
