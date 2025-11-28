// Logic dyal CRUD (create, read, update, delete)

const Todo = require("../models/todoModel");

// 🟢 Get all todos
exports.getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json(todos);
};

// 🟢 GET one todo by ID
exports.getTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  res.json(todo);
};

// 🟢 Create new todo
exports.createTodo = async (req, res) => {
  const { title } = req.body;
  const newTodo = await Todo.create({ title });
  res.status(201).json(newTodo);
};

// 🟢 Update todo
exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  const updatedTodo = await Todo.findByIdAndUpdate(
    id,
    { completed },
    { new: true }
  );
  res.status(200).json(updatedTodo);
};

// 🟢 Delete todo
exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.status(204).json({ message: "Todo deleted" });
};
