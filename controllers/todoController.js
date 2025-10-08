// بيانات مؤقتة (بدون قاعدة بيانات)
let todos = [
  { id: 1, title: "Learn Express.js", done: false },
  { id: 2, title: "Build a ToDo API", done: false },
];

// 1. GET all todos
exports.getAllTodos = (req, res) => {
  res.json(todos);
};

// 2. GET one todo by ID
exports.getTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.json(todo);
};

// 3. POST (add new todo)
exports.createTodo = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }
  const newTodo = {
    id: todos.length + 1,
    title,
    done: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

// 4. PUT (update todo)
exports.updateTodo = (req, res) => {
  const id = parseInt(req.params.id); // hna knrj3o string l number dak id w had req.params.id ktjib id li ja mn URL
  const todo = todos.find((t) => t.id === id); // hna ktmchi t9lb ela dak id li drna f URL w ky9leb kol 3onsr f json li huwa : t

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  const { title, done } = req.body;
  if (title) todo.title = title;
  if (done !== undefined) todo.done = done;
  res.json(todo);
};

// 5. DELETE (remove todo)
exports.deleteTodo = (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter((t) => t.id !== id);
  res.json({ message: "Todo deleted" });
};
