const express = require("express");
const db = require("../models");
const BCrypt = require("../services/bcrypt");
const bc = new BCrypt();

const exampleTask = {
  title: "Do the dishes",
  description: "Finish the dishes by 5 so you can cook dinner.",
  dueDate: new Date(Date.now()).getTime() + 60 * 60000,
};

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded());

// routes
app.get("/v1/tasks", (_req, res) => {
  res.json({ tasks: [exampleTask] });
});

app.get("/login", (_req, res) => {
  res.json({});
});

app.post("/login", (req, res) => {
  db.sequelize.models.User.findOne({
    where: { email: req.body.email },
  })
    .then((user) => {
      if (!user.id) {
        res.send({ user: null, message: "No user with that email" });
        return;
      }
      if (bc.validatePassword(user.password, req.body.password)) {
        bc.secretSession().then((cookie) => {
          res.cookie("accessibility_session", cookie).send({ user: user.id });

          user.createUserSession({ session: cookie });
        });
        return;
      } else {
        res.send({ user: null, message: "Password incorrect" });
        return;
      }
    })
    .catch((err) => {
      res.send({ user: null, message: err });
    });
  return;
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
