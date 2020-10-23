const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DonationSchema = new Schema({
  first: {
    type: String,
    default: null,
    require: true,
  },
  last: {
    type: String,
    default: null,
    require: true,
  },
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  responseStatus: {
    type: Boolean,
    default: false,
    required: true,
  },
  responseMessage: {
    type: String,
    required: true,
    default: null,
  },
  imageUrl: {
    type: [String],
    required: true,
  },
});

module.exports = Donation = mongoose.model("donations", DonationSchema);
