import { Mongoose } from 'mongoose';

/* Generic */

export type Dictionary<T = any> = {
  [key: string]: T;
};

/* Server */

export { Server } from 'http';

/* Database */

export type Database = Mongoose;
