const { request, response } = require("express");

const register = (req = request, res = response) => {
  const credentials = req.body;
  res.status(200).json(credentials);
};

const login = (req = request, res = response) => {
  const credentials = req.body;
  res.status(200).json(credentials);
};

const renew = (req = request, res = response) => {
  res.status(200).json({ message: "You are in auth/renew" });
};

module.exports = { register, login, renew };
