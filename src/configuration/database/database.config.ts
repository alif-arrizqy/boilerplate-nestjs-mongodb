import * as dotenv from 'dotenv';
import { IDatabaseConfig } from './database.interface';

dotenv.config();

export const databaseConfig: IDatabaseConfig = {
  development: {
    host: process.env.DB_HOST_DEVELOPMENT,
    user: process.env.DB_USER_DEVELOPMENT,
    port: Number(process.env.DB_PORT_DEVELOPMENT),
    database: process.env.DB_NAME_DEVELOPMENT,
  },
  staging: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    cluster: process.env.DB_CLUSTER,
    database: process.env.DB_NAME_STAGING,
  },
  production: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    cluster: process.env.DB_CLUSTER,
    database: process.env.DB_NAME_PRODUCTION,
  },
};
