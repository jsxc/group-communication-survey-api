import { model, Schema, Model, Document } from 'mongoose';
import * as KEYS from './keys';

const surveyResultSchema: Schema = new Schema({
  [KEYS.STAT_START]: {
    type: Date,
    required: true,
  },
  [KEYS.STAT_END]: {
    type: Date,
    required: true,
  },
  [KEYS.FEEDBACK_MISSING_MSG_COHERENT]: {
    type: String,
    required: true,
  },
  [KEYS.FEEDBACK_MISSING_MSG_HELPFUL]: {
    type: String,
    required: true,
  },
  [KEYS.FEEDBACK_MISSING_MSG_INTEGRATION]: {
    type: String,
    required: true,
  },
  [KEYS.FEEDBACK_INFERRED_QUOTE_FINE]: {
    type: String,
    required: true,
  },
  [KEYS.FEEDBACK_INFERRED_QUOTE_FINE2]: {
    type: String,
    required: true,
  },
  [KEYS.FEEDBACK_INFERRED_QUOTE_COHERENT]: {
    type: String,
    required: true,
  },
  [KEYS.FEEDBACK_INFERRED_QUOTE_HELPFUL]: {
    type: String,
    required: true,
  },
  [KEYS.FEEDBACK_INFERRED_QUOTE_INTEGRATION]: {
    type: String,
    required: true,
  },
  [KEYS.DIGITAL_JOIN_GOOD_FRIENDS]: {
    type: String,
    required: true,
  },
  [KEYS.DIGITAL_JOIN_BUSINESS]: {
    type: String,
    required: true,
  },
  [KEYS.DIGITAL_JOIN_CLUB]: {
    type: String,
    required: true,
  },
  'What is your email address?': {
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
  },
  'Even if I am not allowed to talk, I always have the possibility to do so': {
    type: String,
    required: true,
  },
  'I am always able to hear everyone speaking': {
    type: String,
    required: true,
  },
  'I am always attentive during a discussion': {
    type: String,
    required: true,
  },
  'I always understand every statement acousticly and contentually': {
    type: String,
    required: true,
  },
  'I am never distracted during a discussion': {
    type: String,
    required: true,
  },
  'I always know who is talking': {
    type: String,
    required: true,
  },
  'I always know the person who is speaking': {
    type: String,
    required: true,
  },
  'I always know every participant in a group': {
    type: String,
    required: true,
  },
  'If there are no tapping devices a single member can not prove that someone said something': {
    type: String,
    required: true,
  },
  'If there are no tapping devices a single member can not prove that someone was a member of a specific group': {
    type: String,
    required: true,
  },
  'It is sometimes important that no member in a group can prove that someone said something': {
    type: String,
    required: true,
  },
  'Confidential private topics are only discussed in small groups': {
    type: String,
    required: true,
  },
  'I always leave a group with an announcement': {
    type: String,
    required: true,
  },
  'If I want to leave a group in my favorite chat app, I will always give a reason': {
    type: String,
    required: true,
  },
  'Are there cases where two or more people are talking at the same time?': {
    type: String,
    required: true,
  },
  'What is the result if two or more people are talking at the same time?': {
    type: String,
  },
  'What is the most common reaction if two or more people are talking at the same time?': {
    type: String,
  },
  'What do you think are the most frequent reasons of distraction even if you are interested at some discussion?': {
    type: String,
    required: true,
  },
  'What are you doing if you are announcing something important?': {
    type: String,
    required: true,
  },
  'Imagine you were distracted and you are now unable to follow the conversation. How do you react?': {
    type: String,
    required: true,
  },
  'What is your most common reaction if a statement is unclear to you?': {
    type: String,
    required: true,
  },
  'What is your reaction if you were not able to understand something acousticly?': {
    type: String,
    required: true,
  },
  'Is there a difference in communication between business and leisure groups?': {
    type: String,
    required: true,
  },
  [KEYS.GROUP_MSG_UNKNOWN_MEMBER]: {
    type: [String],
    required: true,
  },
  'Are you always knowing who will hear your message?': {
    type: String,
    required: true,
  },
  'Are you aware of that?': {
    type: String,
  },
  'In which cases is it especially important for you who will hear your messages?': {
    type: String,
    required: true,
  },
  'Would it be sometimes important for you that nobody in the group can prove that you said something?': {
    type: String,
    required: true,
  },
  'Would it be sometimes important for you that nobody in the group can prove that you were part in a group?': {
    type: String,
    required: true,
  },
  'Do you think there are use cases in which plausible deniability of group membership is important?': {
    type: String,
    required: true,
  },
  'Would it influence your behaviour if everything you say would be immediately published?': {
    type: String,
    required: true,
  },
  [KEYS.GROUP_MSG_REQUIREMENT_CONFIDENTIAL]: {
    type: [String],
    required: true,
  },
  'Which statements are true for the admission of a new member in a business group?': {
    'Everyone can join': {
      type: Boolean,
    },
    "It's ok if someone knows the new member": {
      type: Boolean,
    },
    'I have to know the new member': {
      type: Boolean,
    },
    'The new member has to be part of an organization or similar': {
      type: Boolean,
    },
    "If I don't know the new member, I get to know him": {
      type: Boolean,
    },
    'The new member is mostly invited/introduced by a member': {
      type: Boolean,
    },
    'The new member is mostly requesting admission': {
      type: Boolean,
    },
    'Before a new member is admitted into the group, this decision is discussed internally': {
      type: Boolean,
    },
    "If I'm not satisfied with the new member I leave the group": {
      type: Boolean,
    },
    "If I'm not satisfied with the new member I stop contributing": {
      type: Boolean,
    },
  },
  'Which statements are true for the admission of a new member in a casual group?': {
    'Everyone can join': {
      type: Boolean,
    },
    "It's ok if someone knows the new member": {
      type: Boolean,
    },
    'I have to know the new member': {
      type: Boolean,
    },
    'The new member has to be part of an organization or similar': {
      type: Boolean,
    },
    "If I don't know the new member, I get to know him": {
      type: Boolean,
    },
    'The new member is mostly invited/introduced by a member': {
      type: Boolean,
    },
    'The new member is mostly requesting admission': {
      type: Boolean,
    },
    'Before a new member is admitted into the group, this decision is discussed internally': {
      type: Boolean,
    },
    "If I'm not satisfied with the new member I leave the group": {
      type: Boolean,
    },
    "If I'm not satisfied with the new member I stop contributing": {
      type: Boolean,
    },
  },
  'Which statements are true for the admission of a new member in a confidential group?': {
    'Everyone can join': {
      type: Boolean,
    },
    "It's ok if someone knows the new member": {
      type: Boolean,
    },
    'I have to know the new member': {
      type: Boolean,
    },
    'The new member has to be part of an organization or similar': {
      type: Boolean,
    },
    "If I don't know the new member, I get to know him": {
      type: Boolean,
    },
    'The new member is mostly invited/introduced by a member': {
      type: Boolean,
    },
    'The new member is mostly requesting admission': {
      type: Boolean,
    },
    'Before a new member is admitted into the group, this decision is discussed internally': {
      type: Boolean,
    },
    "If I'm not satisfied with the new member I leave the group": {
      type: Boolean,
    },
    "If I'm not satisfied with the new member I stop contributing": {
      type: Boolean,
    },
  },
  "How do you react if a new person joins a group that you don't like?": {
    type: String,
    required: true,
  },
  'Do you use programs that allow you to communicate with groups?': {
    type: String,
    required: true,
  },
  'Which is your favorite digital group chat messenger?': {
    type: String,
  },
  'Which digital group chat messenger do you use most?': {
    type: String,
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
  'Do you expect that everyone reads your message in a group chat?': {
    type: String,
  },
  'Do you think everyone is reading all your messages in a group chat?': {
    type: String,
  },
  'Are you always reading all messages in a group chat?': {
    type: String,
  },
  'Would you publish all your conversations in your favorite group chat app?': {
    type: String,
  },
  'Would you publish a complete list of groups you are part of in your favorite group chat app?': {
    type: String,
  },
  "What is your most common reaction if a new member, which you don't like, is added to a group?": {
    type: String,
  },
  "What is your most common reaction if you are added to a group which you don't like to be part of?": {
    type: String,
  },
  'How often does this happen?': {
    type: String,
  },
  "What are you doing if you don't want to participate in a digital group?": {
    type: String,
  },
  'Which visualization would you like to have integrated in your favorite chat app?': {
    type: String,
  },
  'Which feature are you missing in your favorite chat app?': {
    type: String,
  },
  firstChatFeedback: {
    'How well did you understand the conversation?': {
      type: String,
      required: true,
    },
    'Did you notice something?': {
      type: String,
      required: true,
    },
  },
  secondChatFeedback: {
    'How well did you understand the conversation?': {
      type: String,
      required: true,
    },
    'Could you explain the purpose of the added chat elements shown in screenshot #1?': {
      type: String,
      required: true,
    },
    'Could you explain the purpose of the added chat elements shown in screenshot #2?': {
      type: String,
      required: true,
    },
  },
  thirdChatFeedback: {
    'How well did you understand the conversation?': {
      type: String,
      required: true,
    },
    [KEYS.FEEDBACK_TREE_CONTEXT]: {
      type: String,
      required: true,
    },
    [KEYS.FEEDBACK_TREE_COMPARISON]: {
      type: String,
      required: true,
    },
  },
  fourthChatFeedback: {
    'How well did you understand the conversation?': {
      type: String,
      required: true,
    },
    [KEYS.FEEDBACK_TAB_CONTEXT_INFERRED]: {
      type: String,
      required: true,
    },
    [KEYS.FEEDBACK_TAB_CONTEXT_TREE]: {
      type: String,
      required: true,
    },
    [KEYS.FEEDBACK_TAB_COMPARISON]: {
      type: String,
      required: true,
    },
  },
  'Is there a feature or visualisation which you miss in your favorite chat app?': {
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
