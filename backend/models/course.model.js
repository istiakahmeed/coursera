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

const courseModel = mongoose.model("course", courseSchema);

module.exports = courseModel;
