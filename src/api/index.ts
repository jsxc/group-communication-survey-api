import { Router } from 'express';
import consola from 'consola';
import { createSurveyResult } from '../database';

export default () => {
  const api = Router();

  api.post('/survey-result', async (req, res) => {
    const surveyResult = req.body;

    try {
      const createdSurveyResult = await createSurveyResult(surveyResult);

      return res.status(201).json({
        error: null,
        data: { surveyResult: createdSurveyResult },
      });
    } catch (error) {
      consola.error(error);

      return res.status(400).json({
        error: { message: error.message },
        data: null,
      });
    }
  });

  api.use((req, res) => {
    return res.status(404).json({
      error: { message: 'Route Not Found' },
      data: null,
    });
  });

  return api;
};
