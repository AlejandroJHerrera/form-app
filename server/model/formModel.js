import mongoose from 'mongoose';

const FormSchema = new mongoose.Schema({
  date: { type: Date },
  contract: { type: String },
  motive: { type: String },
  instalCod: { type: String },
  clientID: { type: String },
  clientName: { type: String },
  installationAddress: { type: String },
  caseNumber: { type: Number },
  comments: { type: String },
  receivedByName: { type: String },
  receivedByID: { type: String },
  receivedSignature: { type: String, required: true },
  technicianName: { type: String, required: true },
  technicianID: { type: String, required: true },
  technicianSignature: { type: String, required: true },
  formID: { type: String, required: true },
});

export default mongoose.model('From', FormSchema);
