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

export const formatDistanceBetweenDates = (date, baseDate) => {
  return formatDistance(date, baseDate);
};

export const getExpStatusFromDate = expDateTs => {
  let currentDateTs = new Date().getTime();

  let daysDifference = differenceInCalendarDays(expDateTs, currentDateTs);

  console.log({daysDifference});

  if (daysDifference > 7) {
    return 'green';
  } else if (daysDifference > 3) {
    return 'yellow';
  } else {
    return 'red';
  }
};
