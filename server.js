const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rajathsinha:rajathsinha1@cluster0.3se5dau.mongodb.net/Pricing", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected!");
})
.catch((err) => {
  console.error(err);
});

const pricingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  notes: {
    type: String,
    required: true,
  }
});

const pricing = mongoose.model("pricing", pricingSchema);

module.exports = pricing;
