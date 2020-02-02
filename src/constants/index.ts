export default {
  server: {
    port: 4000,
  },
  mongodb: {
    connectionUri: {
      development: 'mongodb://localhost/group-communication-survey',
      production: 'mongodb://mongodb/group-communication-survey',
    },
  },
};
