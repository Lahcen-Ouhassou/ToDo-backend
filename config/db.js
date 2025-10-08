const mongoose = require("mongoose");

const DB = "mongodb://127.0.0.1:27017/todoDB";

const connectDB = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected ✅");
  } catch (err) {
    console.error("MongoDB connection error ❌:", err);
    process.exit(1); // exit fl case dyal error
  }
};

module.exports = connectDB; // export function
