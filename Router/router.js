const express = require("express");
const router = express.Router();
const pricing = require("../server");

router.get("/", (req, res) => {
  console.log(req.query);
  res.render("Home", {
    title: "Rajath Sinha - Backend Developer",
  });
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/sendData', async (req, res) => {
  try {
    console.log(req.body);
    const newData = new pricing(req.body);
    const savedData = await newData.save();
    res.status(200).json({ message: 'Your queries have been submitted and this is your case ID', caseID:savedData._id });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
});



module.exports = router;
