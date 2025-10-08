const express = require("express");

const app = express();

// Middleware باش يفهم JSON
app.use(express.json());

// Routes
const todoRoutes = require("./routes/todoRoutes");
app.use("/api/v1/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("✅ Server is running!");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
