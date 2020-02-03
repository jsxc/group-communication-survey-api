import { model, Schema, Model, Document } from 'mongoose';

const surveyResultSchema: Schema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  name: {
    type: String,
  },
  isMale: {
    type: Boolean,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  region: {
    type: String,
    required: true,
    enum: [
      'Africa',
      'Europe',
      'Asia',
      'North America',
      'South America',
      'Australia',
    ],
  },
  definition: {
    type: String,
    required: true,
  },
  expectation: {
    type: String,
    required: true,
  },
  usesGroupChatClient: {
    type: Boolean,
    required: true,
  },
  groupsCount: {
    type: Number,
  },
  regularlyUsedGroupsCount: {
    type: Number,
  },
  smallestGroupMembersCount: {
    type: Number,
  },
  largestGroupMembersCount: {
    type: Number,
  },
  firstChatFeedback: [
    {
      type: Number,
      required: true,
    },
  ],
  secondChatFeedback: [
    {
      type: Number,
      required: true,
    },
  ],
  thirdChatFeedback: [
    {
      type: Number,
      required: true,
    },
  ],
  fourthChatFeedback: [
    {
      type: Number,
      required: true,
    },
  ],
  fifthChatFeedback: [
    {
      type: Number,
      required: true,
    },
  ],
  opinionOnRepresentations: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Number,
    required: true,
  },
});

const surveyResultModel: Model<Document> = model(
  'SurveyResult',
  surveyResultSchema,
  'survey-results',
);

export default surveyResultModel;
