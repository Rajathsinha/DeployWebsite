function ageDetector(req, res, next) {
  if (req.query.age > 18) {
    next();
  } else {
    res.send("Not elegible");
  }
}

module.exports = ageDetector;
