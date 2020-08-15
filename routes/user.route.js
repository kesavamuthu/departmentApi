let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({ msg: "Welcome to users" });
});

router.post("/auth", (req, res) => {
  res.status(201).send({ msg: "created" });
});

router.post("/register", (req, res) => {
  res.status(201).send({ msg: "created" });
});

module.exports = router;
