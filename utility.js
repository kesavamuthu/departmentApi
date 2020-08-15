exports.errorThrower = (value, statusCode, next) => {
  let err = new Error(value);
  err.status = statusCode;
  next(err);
};
