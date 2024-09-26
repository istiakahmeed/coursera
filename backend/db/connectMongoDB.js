const express = require("express");
const { default: mongoose } = require("mongoose");

const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MOngoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB ${error.message}`);
  }
};

module.exports = connectMongoDB;
