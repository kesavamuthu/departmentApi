let express = require("express");
let router = express.Router();
let form = require("../controllers/form");
router.get("/", (req, res) => {
  res.status(200).send({ msg: "Welcome to form" });
});

router.post("/", form.createForm);

router.put("/", form.update);

router.patch("/", form.updateStatus);

router.delete("/:_id", form.deleteForm);

router.get("/status/:sender/:status/:limit", form.formStatus);

module.exports = router;
