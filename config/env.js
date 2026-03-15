import { config } from 'dotenv';

// path where config read environment variables and set to process.env
config({ path: `.env.${process.env.NODE_ENV}` });

// destruct to get variables out of environment file
export const { PORT, DB_URI } = process.env;
