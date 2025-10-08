const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// Create Model
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
