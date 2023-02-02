const { request, response } = require("express");
const { check, validationResult } = require("express-validator");

const emailValidation = [
  check("email", "The 'email' is required").exists(),
  check("email", "The 'email' is invalid").isEmail(),
];

const passwordValidation = [
  check("password", "The 'password' is required").exists(),
  check(
    "password",
    "The 'password' is required to be min length of 6"
  ).isLength({ min: 6 }),
];

const validateRegisterCredentials = [
  check("name", "The 'name' is required").exists(),
  ...emailValidation,
  ...passwordValidation,
  (req = request, res = response, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors.mapped());
    next();
  },
];

const validateLoginCredentials = [
  ...emailValidation,
  ...passwordValidation,
  (req = request, res = response, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors.mapped());
    next();
  },
];

module.exports = { validateRegisterCredentials, validateLoginCredentials };
