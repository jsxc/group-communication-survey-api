import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import api from './api';
import { match } from './utilities';
import constants from './constants';
import { Server, Database } from './types';

export const startServer = (): Server => {
  const PORT = process.env.PORT || constants.server.port;

  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use('/api/', api());

  const server = http.createServer(app).listen(PORT);

  return server;
};

export const startMongoDBConnection = async (): Promise<Database> => {
  const mongodbConnectionUri: string = match<string, string>([
    { if: 'production', then: constants.mongodb.connectionUri.production },
    { if: 'development', then: constants.mongodb.connectionUri.development },
  ])(process.env.NODE_ENV);

  const mongodbConnectionOptions = {
    useNewUrlParser: true,
    authSource: 'admin',
    user: process.env.MONGODB_USERNAME,
    pass: process.env.MONGODB_PASSWORD,
  };

  const mongodbDatabase = await mongoose.connect(
    mongodbConnectionUri,
    mongodbConnectionOptions,
  );

  return mongodbDatabase;
};
