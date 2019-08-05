const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

app.listen(port, () =>
  console.log(`Simulated backend listening on port ${port}!`)
);

const todos = [
  { id: 1, description: "Write some code", done: false, critical: false },
  { id: 2, description: "Change the world", done: false, critical: false },
  { id: 3, description: "Eat a cookie", done: false, critical: false }
];

app.get("/api/todos", (req, res) => res.json({ todos: todos }));

app.post("/api/todos", (req, res) => {
  const body = { id: todos.length + 1, ...req.body };
  res.json({ todos: [...todos, body] });
});
