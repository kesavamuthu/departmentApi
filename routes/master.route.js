let express = require("express");
let router = express.Router();
let depts = require("./department.route");
let forms = require("./form.route");

router.get("/", (req, res) => {
  res.status(200).send({ msg: "Welcome to kingfisher" });
});
router.use("/user", require("./user.route"));
router.use("/dept", depts);
router.use("/form", forms);

module.exports = router;
