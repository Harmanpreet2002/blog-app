const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.signUp = async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      username,
      password: hashedPassword,
    });
    res.status(201).json({
      status: "Created",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "Bad request",
    });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      res.status(404).json({
        status: "Not found",
      });
    }

    const isCorrect = await bcrypt.compare(password, user.password);

    if (isCorrect) {
      res.status(200).json({
        status: "Ok",
      });
    } else {
      res.status(400).json({
        status: "Bad request",
        message: "Incorrect username or password",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "Bad request",
    });
  }
};
