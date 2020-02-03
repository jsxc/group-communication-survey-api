import { Document } from 'mongoose';
import model from './model';
import { nowMillis } from '../../utilities';
import { SurveyResult } from '../../types';

export const createSurveyResult = (
  newSurveyResult: SurveyResult,
): Promise<Document> => {
  return model.create({
    ...newSurveyResult,
    createdAt: nowMillis(),
  });
};
