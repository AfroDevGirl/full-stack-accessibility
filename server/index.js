const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const exampleTask = {
  title: "Do the dishes",
  description: "Finish the dishes by 5 so you can cook dinner.",
  dueDate: new Date(Date.now()).getTime() + 60 * 60000,
};

app.get("/v1/tasks", (_req, res) => {
  res.json({ tasks: [exampleTask] });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
