import consola from 'consola';
import { startServer } from './server';
import { startMongoDBConnection } from './database';
import { loadEnvironmentVariables, getPort } from './utilities';

(async () => {
  try {
    loadEnvironmentVariables([
      'NODE_ENV',
      'MONGODB_USERNAME',
      'MONGODB_PASSWORD',
    ]);

    const database = await startMongoDBConnection();
    const server = startServer();

    consola.success(`Server is running on port ${getPort(server)}...`);
  } catch (error) {
    consola.fatal('Failed to start server:', error);
  }
})();
