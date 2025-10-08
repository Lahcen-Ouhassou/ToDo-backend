const mongoose = require("mongoose");

const DB = "mongodb://127.0.0.1:27017/todoDB";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.log("MongoDB connection error ❌:", err));
