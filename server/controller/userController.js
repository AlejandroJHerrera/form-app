import User from '../model/userModel.js';
import { createError } from '../util/error.js';

export const getAllAdmin = async (req, res, next) => {
  try {
    const admins = await User.find({ isAdmin: true });

    if (admins.length <= 0) return next(createError(404, 'No Admin found'));
    res.status(200).send(admins);
  } catch (error) {
    next(error);
  }
};

export const getTechsWithSameAdmin = async (req, res, next) => {
  try {
    const group = await User.find({ Admin: req.body.Admin });

    if (group.length < 0) return next(createError(404, 'Admin not found'));

    res.status(200).send({ group });
  } catch (error) {
    next(error);
  }
};
