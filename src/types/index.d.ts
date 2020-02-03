import { Mongoose } from 'mongoose';

/* Generic */

export type Dictionary<T = any> = {
  [key: string]: T;
};

/* Server */

export { Server } from 'http';

/* Database */

export type Database = Mongoose;

/* Validation */

export type Constraints = {
  [path: string]: {
    validationFunction: (value: any) => boolean;
    invalidMessage: (value: any) => string;
  };
};

export type ValidationResult = {
  isValid: boolean;
  message: string;
};
