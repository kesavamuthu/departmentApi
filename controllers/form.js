require("../models/form.model");
let mongoose = require("mongoose");
let Form = mongoose.model("Form");
let util = require("../utility");

exports.createForm = (req, res, next) => {
  try {
    let { sender, receiver, receiverDept, msg } = req.body;
    if (!sender || !receiver || !receiverDept || !msg)
      return util.errorThrower("Absence of mandatory fields", 400, next);
    let form = new Form({ sender, receiver, receiverDept, msg });
    console.log(form);
    form
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
  }
};

exports.update = (req, res, next) => {
  let { _id, sender, receiver, receiverDept, msg } = req.body;
  if (!_id || !sender || !receiver || !receiverDept || !msg)
    return util.errorThrower("Absence of mandatory fields", 400, next);
  Form.findByIdAndUpdate({ _id }, req.body)
    .then((val) => {
      if (!val) return util.errorThrower("No match", 422, next);
      res.status(204).send();
    })
    .catch((err) => next(err));
  console.log("continue");
};

exports.formStatus = (req, res, next) => {
  let { sender, status, limit } = req.params;
  if (!sender)
    return util.errorThrower("Absence of mandatory fields", 400, next);
  if (+limit > 100) return util.errorThrower("limit is reached", 404, next);
  console.log(limit);
  Form.find({ sender })
    .where({ status })
    .sort({ date: 1 })
    .limit(+limit)
    .then((val) => res.status(200).send(val))
    .catch((err) => next(err));
};

exports.updateStatus = (req, res, next) => {
  let { _id, status } = req.body;
  if (!_id || !status)
    return util.errorThrower("Absence of mandatory fields", 400, next);
  Form.findByIdAndUpdate({ _id }, req.body)
    .then((val) => {
      if (!val) return util.errorThrower("No match", 422, next);
      res.status(204).send();
    })
    .catch((err) => next(err));
  //socket will happen here after update the forms
};

exports.deleteForm = (req, res, next) => {
  let { _id } = req.params;
  if (!_id) return util.errorThrower("Absence of mandatory fields", 400, next);
  Form.findByIdAndRemove({ _id })
    .then((val) => {
      if (!val) return util.errorThrower("No department exists ", 403, next);
      res.status(204).send();
    })
    .catch((err) => next(err));
};
