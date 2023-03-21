import User from '../model/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createError } from '../util/error.js';

export const register = async (req, res, next) => {
  try {
    const user = await User.find({ email: req.body.email });

    if (user.length > 0) return next(createError(404, 'User already exists!'));

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();
    res.status(200).send('User has been created!');
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return next(createError(404, 'User not found!'));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect)
      return next(createError(404, 'Password incorrect!'));

    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT
    );

    const { password, ...otherDetails } = user._doc;

    res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json({ ...otherDetails });
  } catch (error) {
    next(error);
  }
};

export const logout = (req, res, next) => {
  try {
    res.cookie('access_token', 'none', {
      expires: new Date(Date.now() + 2 * 1000),
      httpOnly: true,
    });
    res.status(200).send('User has logged out');
  } catch (error) {
    next(error);
  }
};
