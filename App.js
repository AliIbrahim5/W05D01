// const { query } = require("express");
const express = require("express");
const app = express();

const port = 5000;
app.use(express.json());

const todo = [
  { id: 1, task: "home", iscoplem: false },
  { id: 2, task: "school", iscoplem: false },
  { id: 3, task: "hospital", iscoplem: false },
  { id: 4, task: "meting", iscoplem: false },
];

//read

app.get("/todo", (req, res) => {
  res.status(200);
  res.json(todo);
});
//great
app.post("/creat", (req, res) => {
  const { id, task, iscoplem } = req.body;
  todo.push({ id, task, iscoplem });
  res.status(201);
  res.json(todo);
});

//delete

app.delete("/delet", (req, res) => {
  const { id } = req.body;
  todo.splice({ id }, 1);
  res.status(200);
  res.json(todo);
});
//update
app.put("/updeit/:uid", (req, res) => {
  const { id, task, iscoplem } = req.body;
  const { uid } = req.params;

  // const inf = todo.indexOf(i=>i.id==id)
  // todo.splice(id-1,1,{id, task, iscoplem})
  let index;
  todo.forEach((elem, i) => {
    if (elem.id == uid) {
      index = i;
    }
  });
  if (index === undefined) {
    res.status(404);
    res.json("wrong user id");
  }

  todo[index] = { id, task, iscoplem };

  res.status(200);
  res.json(todo);
});

app.listen(port, () => {
  console.log(`thie is port ${port}`);
});
