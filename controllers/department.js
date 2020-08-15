require("../models/department.model");
let mongoose = require("mongoose");
let Dept = mongoose.model("Dept");
let util = require("../utility");

exports.createDepartment = (req, res, next) => {
  try {
    let { name } = req.body;
    console.log(name);
    if (!name)
      return res.status(400).send({ msg: "Absence of mandatory details" });
    let dept = new Dept();
    dept.name = name;
    dept
      .save()
      .then((result) => {
        res.status(201).send({ msg: "created" });
      })
      .catch((error) => {
        res.status(400).send({ msg: "Name already exists" });
      });
  } catch (error) {
    console.error(error);
    next(error);
    // res.status(500).send({ msg: "some error" });
  }
};

exports.getAllDepartment = async (req, res) => {
  try {
    let result = await Dept.find({}).select("name");
    // -_id using this to avoid getting id
    res.status(200).send({ result });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "some error" });
  }
};

exports.update = (req, res, next) => {
  let { _id, name } = req.body;
  if (!name || !_id)
    return util.errorThrower("Absence of mandatory fields", 400, next);
  Dept.findByIdAndUpdate({ _id }, { name })
    .then((val) => res.status(204).send())
    .catch((err) => next(err));
  console.log("continue");
};

exports.formIdPlacer = (req, res, next) => {
  let { _id, formId } = req.body;
  if (!_id || !formId)
    return util.errorThrower("Absence of mandatory fields", 400, next);
  Dept.findByIdAndUpdate({ _id }, { $push: { formIds: formId } })
    .then((val) => res.status(204).send())
    .catch((err) => next(err));
};

exports.deleteDept = (req, res, next) => {
  let { _id } = req.body;
  if (!_id) return util.errorThrower("Absence of mandatory fields", 400, next);
  Dept.findByIdAndRemove({ _id })
    .then((val) => {
      if (!val) return util.errorThrower("No department exists ", 403, next);
      res.status(204).send();
    })
    .catch((err) => next(err));
};
