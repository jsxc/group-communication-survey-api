import mongoose from 'mongoose';
import { match } from './utilities';
import constants from './constants';
import { Database } from './types';

export const startMongoDBConnection = async (): Promise<Database> => {
  const mongodbConnectionUri: string = match<string, string>([
    { if: 'production', then: constants.mongodb.connectionUri.production },
    { if: 'development', then: constants.mongodb.connectionUri.development },
  ])(process.env.NODE_ENV);

  const mongodbConnectionOptions = {
    useUnifiedTopology: true,
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
