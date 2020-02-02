import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import api from './api';
import constants from './constants';
import { Server } from './types';

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
