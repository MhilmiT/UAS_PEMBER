const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema(
  {
    country_id: { type: String, require: true },
    description: { type: String, require: true },
    availability: {
      start: { type: Date },
      end: { type: Date },
    },
    contact: { type: String, require: true },
    imageUrl: { type: String, require: true },
    location: { type: String, require: true },
    title: { type: String, require: true },
    rating: { type: Number, require: true },
    review: { type: String, require: true },
    coordinates: {
      latitude: { type: Number, require: true },
      longitude: { type: Number, require: true },
    },
    price: { type: Number, required: true },
    facilities: [
      {
        wifi: { types: Boolean, default: true },
      },
    ],
  },
  { timestamps: false }
);

module.exports = mongoose.model("Hotel", HotelSchema);
