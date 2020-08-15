let express = require("express");
let router = express.Router();
let dept = require("../controllers/department");

router.get("/", dept.getAllDepartment);

router.delete("/", dept.deleteDept);

router.post("/", dept.createDepartment);

router.put("/", dept.update);
router.patch("/", dept.formIdPlacer);

module.exports = router;
