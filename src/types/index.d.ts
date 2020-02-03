import { Mongoose } from 'mongoose';

/* Server */

export { Server } from 'http';

/* Database */

export type Database = Mongoose;

/* Survey Results */

export type SurveyResult = {
  name: string;
  isMale: boolean;
  age: number;
  region: string;
  definition: string;
  expectation: string;
  usesGroupChatClient: boolean;
  groupsCount: number;
  regularlyUsedGroupsCount: number;
  smallestGroupMembersCount: number;
  largestGroupMembersCount: number;
  firstChatFeedback: ChatFeedback;
  secondChatFeedback: ChatFeedback;
  thirdChatFeedback: ChatFeedback;
  fourthChatFeedback: ChatFeedback;
  fifthChatFeedback: ChatFeedback;
  opinionOnRepresentations: string;
};

type ChatFeedback = number[];
