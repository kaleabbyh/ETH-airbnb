import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const updateUser = async (req, res, next) => {
  try {
    var hash;
    if (req.body.password) {
      const salt = bcrypt.genSaltSync(10);
      hash = bcrypt.hashSync(req.body.password, salt);
    } else {
      hash = await User.findById(req.params.id).password;
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { ...req.body, password: hash },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  try {
    if (user) {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted.");
    } else {
      res.status(404).json("user not found");
    }
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
