const express = require("express");
// const path = require("path");  // Add this line to import the 'path' module
const app = express();
const port = 2000;
const router = require("./Router/router");

// Middleware to parse JSON in the request body
app.use(express.json());

// Middleware to parse URL-encoded data in the request body
app.use(express.urlencoded({ extended: false }));

app.use(router);
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
