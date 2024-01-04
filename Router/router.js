const express = require("express");
const router = express.Router();
const middleware = require("../middleware/middleware");

//router.use(middleware);
router.get("/", (req, res) => {
  console.log(req.query);
  res.render("Home", {
    title: "Rajath Sinha - Backend Developer",
  });
});

module.exports = router;
