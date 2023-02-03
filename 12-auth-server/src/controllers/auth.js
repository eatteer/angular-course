const { request, response } = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const isEmailTaken = async (email) => {
  const user = await User.findOne({ email });
  return Boolean(user);
};

const hashPassword = (password) => {
  const salt = bcryptjs.genSaltSync();
  const hash = bcryptjs.hashSync(password, salt);
  return hash;
};

const createJwt = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

const doPasswordsMatch = (password, hash) => {
  const match = bcryptjs.compareSync(password, hash);
  return match;
};

const register = async (req = request, res = response) => {
  try {
    const { name, email, password } = req.body;

    if (await isEmailTaken(email)) {
      return res.status(400).json({ message: "Email is already taken" });
    }

    const hash = hashPassword(password);
    const user = new User({ name, email, password: hash });

    await user.save();
    const { id } = user;
    const accessToken = createJwt({ id, name });

    return res.status(201).json({
      message: "User created",
      user: { id, name },
      accessToken,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const login = async (req = request, res = response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !doPasswordsMatch(password, user.password)) {
      return res
        .status(400)
        .json({ message: "Email or password do not match" });
    }

    const { id, name } = user;
    const accessToken = createJwt({ id, name });

    return res.status(200).json({
      message: "User logged in",
      user: { id, name },
      accessToken,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const renew = (req = request, res = response) => {
  try {
    const { user } = req;
    const accessToken = createJwt(user);
    res.status(200).json({
      message: "Access token was renewed",
      user,
      accessToken,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { register, login, renew };
