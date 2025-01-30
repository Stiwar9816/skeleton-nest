import 'dotenv/config';
import * as joi from 'joi';
import { EnvVars } from 'src/interfaces';

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    STATE: joi.string().required(),
    DB_PASSWORD: joi.string().required(),
    DB_NAME: joi.string().required(),
    DB_HOST: joi.string().required(),
    DB_USERNAME: joi.string().required(),
    JWT_SECRET: joi.string().required(),
    MAIL_HOST: joi.string().required(),
    MAIL_USER: joi.string().required(),
    MAIL_PASSWORD: joi.string().required(),
    MAIL_FROM: joi.string().required(),
    APP_NAME: joi.string().required(),
    FRONTEND_URL: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate({ ...process.env });

if (error) throw new Error(`Config validation error: ${error.message}`);
const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  state: envVars.STATE,
  db_host: envVars.DB_HOST,
  db_name: envVars.DB_NAME,
  db_username: envVars.DB_USERNAME,
  db_password: envVars.DB_PASSWORD,
  jwt_secret: envVars.JWT_SECRET,
  mail_host: envVars.MAIL_HOST,
  mail_user: envVars.MAIL_USER,
  mail_password: envVars.MAIL_PASSWORD,
  mail_from: envVars.MAIL_FROM,
  app_name: envVars.APP_NAME,
  frontend_url: envVars.FRONTEND_URL,
};
