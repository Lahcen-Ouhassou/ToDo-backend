//Main server file

const express = require("express");

const connectDB = require("./config/db");
connectDB();
const app = express();

// Middleware باش يفهم JSON
app.use(express.json());

// Routes (/api/v1/todos :كنقول للسيرفر: أي طلب بدا بـ  سير لهداك الملف ديال todoRoutes)
const todoRouter = require("./routes/todoRoutes");
app.use("/api/v1/todos", todoRouter);

app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
