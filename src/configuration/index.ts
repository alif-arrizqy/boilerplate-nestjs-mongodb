import * as dotenv from 'dotenv';
import { DEVELOPMENT, PRODUCTION, STAGING } from './constant';

dotenv.config();

const env_node = process.env.NODE_ENV;
let uri: any;
switch (env_node) {
  case DEVELOPMENT:
    uri = `${process.env.DB_HOST_DEVELOPMENT}://${process.env.DB_USER_DEVELOPMENT}:${process.env.DB_PORT_DEVELOPMENT}/${process.env.DB_NAME_DEVELOPMENT}`;
    break;
  case STAGING:
    uri = `${process.env.DB_HOST}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME_STAGING}?retryWrites=true&w=majority`;
    break;
  case PRODUCTION:
    uri = `${process.env.DB_HOST}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME_PRODUCTION}?retryWrites=true&w=majority`;
    break;
  default:
    uri = `${process.env.DB_HOST_DEVELOPMENT}://${process.env.DB_USER_DEVELOPMENT}:${process.env.DB_PORT_DEVELOPMENT}/${process.env.DB_NAME_DEVELOPMENT}`;
}

export const DATA_BASE_CONFIGURATION = {
  databaseConnection: uri,
};
