import { Mongoose } from 'mongoose';

/* Server */

export { Server } from 'http';

/* Database */

export type Database = Mongoose;

/* Survey Results */

export type SurveyResult = {
  'What is your name?': string;
  'Specify your sex:': string;
  'How old are you?': number;
  'Which region are you from?': string;
  'What do you think are properties that define group communication?': string;
  'What are you expecting from a digital group?': string;
  'Do you use group chat clients such as WhatsApp?': string;
  'How many groups do you have?': number;
  'How many groups do you use regularly?': number;
  'How many members does the smallest group have?': number;
  'How many members does the largest group have?': number;
  firstChatFeedback: {
    'How well did you understand the conversation?': string;
    'Did Lara watch the game?': string;
  };
  secondChatFeedback: {
    'How well did you understand the conversation?': string;
    'Is Arthur alright?': string;
    'Does Arthur know the other driver involved in the accident?': string;
  };
  thirdChatFeedback: {
    'How well did you understand the conversation?': string;
    'Did Karl prepare the presentation?': string;
    'Did Karl prepare the invitation?': string;
  };
  fourthChatFeedback: {
    'How well did you understand the conversation?': string;
    'Will Emil be lent money?': string;
  };
  fifthChatFeedback: {
    'How well did you understand the conversation?': string;
    'How many people reported sick?': string;
    'Is the day going smoothly?': string;
  };
  'What do you think of the new representations?': string;
};
