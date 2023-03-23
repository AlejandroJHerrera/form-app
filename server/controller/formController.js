import Form from '../model/formModel.js';
import { createError } from '../util/error.js';

export const createForm = async (req, res, next) => {
  try {
    const form = await Form.find({ formID: req.body.formID });

    if (form.length > 0) return next(createError(404, 'Form already exists'));

    const newForm = new Form({
      date: req.body.date,
      contract: req.body.contract,
      motive: req.body.motive,
      instalCod: req.body.instalCod,
      clientID: req.body.clientID,
      clientName: req.body.clientName,
      installationAddress: req.body.installationAddress,
      caseNumber: req.body.caseNumber,
      comments: req.body.comments,
      receivedByName: req.body.receivedByName,
      receivedByID: req.body.receivedByID,
      receivedSignature: req.body.receivedSignature,
      technicianName: req.body.technicianName,
      technicianID: req.body.technicianID,
      technicianSignature: req.body.technicianSignature,
      formID: req.body.formID,
    });

    await newForm.save();
    res.status(200).send('Form has been Created');
  } catch (error) {
    next(error);
  }
};

export const findForm = async (req, res, next) => {
  try {
    const form = await Form.findOne({ formID: req.body.formID });

    if (!form) return next(createError(404, 'Form not found'));

    res.status(200).send({ form });
  } catch (error) {
    next(error);
  }
};

export const findTech = async (req, res, next) => {
  debugger;
  try {
    const tech = await Form.find({ technicianID: req.body.technicianID });

    if (tech.length <= 0)
      return next(createError(404, 'No forms found for this Technician'));

    res.status(200).send({ tech });
  } catch (error) {
    next(error);
  }
};

export const allForms = async (req, res, next) => {
  try {
    const form = await Form.find();

    res.status(200).send({ form });
  } catch (error) {
    next(error);
  }
};
