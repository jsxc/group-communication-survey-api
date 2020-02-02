import { Router } from 'express';

export default () => {
  const api = Router();

  api.use((req, res) => {
    return res.status(404).json({
      error: { message: 'Not Found' },
      data: null,
    });
  });

  return api;
};
