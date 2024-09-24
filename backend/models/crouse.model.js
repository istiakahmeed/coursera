const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const objectId = mongoose.Types.ObjectId;

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: Number,
  imageUrl: String,
  creatorId: {
    type: objectId,
    ref: "admin",
    required: true,
  },
});

const crouseModel = mongoose.model("crouse", courseSchema);

module.exports = crouseModel;
