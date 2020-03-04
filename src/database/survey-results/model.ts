import { model, Schema, Model, Document } from 'mongoose';

const surveyResultSchema: Schema = new Schema({
  'What is your name?': {
    type: String,
  },
  'Specify your sex:': {
    type: String,
    required: true,
  },
  'How old are you?': {
    type: Number,
    required: true,
  },
  'Which region are you from?': {
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
  'What do you think are properties that define group communication?': {
    type: String,
    required: true,
  },
  'What are you expecting from a digital group?': {
    type: String,
    required: true,
  },
  'Do you use group chat clients such as WhatsApp?': {
    type: String,
    required: true,
  },
  'How many groups do you have?': {
    type: Number,
  },
  'How many groups do you use regularly?': {
    type: Number,
  },
  'How many members does the smallest group have?': {
    type: Number,
  },
  'How many members does the largest group have?': {
    type: Number,
  },
  firstChatFeedback: {
    'How well did you understand the conversation?': {
      type: String,
      required: true,
    },
    'Did Lara watch the game?': {
      type: String,
      required: true,
    },
  },
  secondChatFeedback: {
    'How well did you understand the conversation?': {
      type: String,
      required: true,
    },
    'Is Arthur alright?': {
      type: String,
      required: true,
    },
    'Does Arthur know the other driver involved in the accident?': {
      type: String,
      required: true,
    },
  },
  thirdChatFeedback: {
    'How well did you understand the conversation?': {
      type: String,
      required: true,
    },
    'Did Karl prepare the presentation?': {
      type: String,
      required: true,
    },
    'Did Karl prepare the invitation?': {
      type: String,
      required: true,
    },
  },
  fourthChatFeedback: {
    'How well did you understand the conversation?': {
      type: String,
      required: true,
    },
    'Will Emil be lent money?': {
      type: String,
      required: true,
    },
  },
  fifthChatFeedback: {
    'How well did you understand the conversation?': {
      type: String,
      required: true,
    },
    'How many people reported sick?': {
      type: String,
      required: true,
    },
    'Is the day going smoothly?': {
      type: String,
      required: true,
    },
  },
  'What do you think of the new representations?': {
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
