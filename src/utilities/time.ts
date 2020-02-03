import moment from 'moment';

export const nowMillis = (): number => {
  return moment().valueOf();
};
