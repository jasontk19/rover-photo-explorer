import moment from 'moment';

const dateFormat = 'MMMM D, YYYY';

export const Utils = {
  formatDate: date => (moment(date).format(dateFormat))
};