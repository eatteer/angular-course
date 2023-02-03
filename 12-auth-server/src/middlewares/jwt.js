const { request, response } = require("express");
const jwt = require("jsonwebtoken");

const validateJwt = (req = request, res = response, next) => {
  const accessToken = req.header("X-Access-Token");

  if (!accessToken) {
    return res.status(401).json({ message: "Access token is missing" });
  }

  try {
    const { id, name } = jwt.verify(accessToken, process.env.JWT_SECRET);
    req.user = { id, name };
  } catch (error) {
    res.status(401).json({ message: "Access token is invalid" });
  }

  next();
};

module.exports = { validateJwt };
