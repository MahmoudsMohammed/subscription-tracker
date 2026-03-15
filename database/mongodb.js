import mongoose from 'mongoose';
import { DB_URL, NODE_ENV } from '../config/env.js';

if (!DB_URL) {
  throw Error('Please set data base URL for connection');
}

// any async operation handle by try and catch
const databaseConnection = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log(`Data Base connection stable successfully at ${NODE_ENV} mode`);
  } catch (error) {
    console.error('Error connecting to database: ', error);

    process.exit(1);
  }
};

export default databaseConnection;
