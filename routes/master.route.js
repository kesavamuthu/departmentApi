let express = require("express");
let router = express.Router();
let depts = require("./department.route");
let users = require("./user.route");
let forms = require("./form.route");
let con = require("../config/connect");

router.get("/", (req, res) => {
  console.log(
    con.collection("users").find({}, function (err, docs) {
      if (err) throw err;
      docs.each(function (err, doc) {
        if (doc) {
          console.log(doc);
        } else {
          res.status(200).send({
            msg: "Welcome to kingfisher",
          });
        }
      });
    })
  );
  res.status(200).send({
    msg: "Welcome to kingfisher",
  });
});
router.use("/user", require("./user.route"));
router.use("/dept", depts);
router.use("/form", forms);

module.exports = router;
