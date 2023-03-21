import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoute from './routes/authRoute.js';

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log('--Connected to MongoDB');
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on('connected', () => {
  console.log('--MongoDb connected');
});

mongoose.connection.on('disconnected', () => {
  console.log('++MongoDb disconnected');
});

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(cookieParser());

//Routes
app.use('/auth', authRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong';
  return res.status(500).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(process.env.PORT || 4000, () => {
  connect(), console.log('--Connected to the Backend!');
});
