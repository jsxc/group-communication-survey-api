import { startServer, startMongoDBConnection } from './server';
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

    console.log(`Server is running on port ${getPort(server)}...`);
  } catch (error) {
    console.log('Failed to start server:', error);
  }
})();
