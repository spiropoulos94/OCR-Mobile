import {formatDistance} from 'date-fns';

export const convertTimestampToDate = ts => {
  let dateFormat = new Date(ts);

  return (
    dateFormat.getDate() +
    '-' +
    (dateFormat.getMonth() + 1) +
    '-' +
    dateFormat.getFullYear() +
    ' '
  );
};

export const formatDistanceBetweenDates = (date, baseDate) => {
  return formatDistance(date, baseDate);
};
