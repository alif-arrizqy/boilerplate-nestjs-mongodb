import * as dotenv from 'dotenv';
dotenv.config();

export const DATA_BASE_CONFIGURATION = {
  databaseConnection: `${process.env.MONGODB_CONNECTION_STRING}${process.env.MONGODB_DATABASE}`,
};
