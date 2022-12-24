import {formatDistance, differenceInCalendarDays} from 'date-fns';

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

export const formatDistanceBetweenDates = (expDate, date) => {
  let daysDifference = getDifferenceInDays(expDate, date);

  if (daysDifference < 1) {
    return 'Today';
  }
  if (daysDifference < 2) {
    return 'Tomorrow';
  }

  return formatDistance(expDate, date);
};

export const getDifferenceInDays = (expDateTs, currentDateTs) => {
  return differenceInCalendarDays(expDateTs, currentDateTs);
};

export const getExpStatusFromDate = expDateTs => {
  let currentDateTs = new Date().getTime();

  let daysDifference = differenceInCalendarDays(expDateTs, currentDateTs);

  if (daysDifference > 7) {
    return 'green';
  } else if (daysDifference > 3) {
    return 'yellow';
  } else {
    return 'red';
  }
};
