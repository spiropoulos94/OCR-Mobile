import {
  formatDistance,
  differenceInCalendarDays,
  // parseDate,
  isValid,
} from 'date-fns';

import parseDate from 'date-fns/parse';

export const parseDateFromText = text => {
  // Define an array to store the found dates
  const dates = [];
  // Define an array of all possible date formats
  const dateFormats = [
    'yyyy-MM-dd',
    'MM-dd-yyyy',
    'dd-MM-yyyy',
    'yyyy/MM/dd',
    'MM/dd/yyyy',
    'dd/MM/yyyy',
    'yyyy.MM.dd',
    'MM.dd.yyyy',
    'dd.MM.yyyy',
  ];
  // Iterate through each date format
  dateFormats.forEach(format => {
    // Try to parse the date using the current format

    const date = parseDate(text, format, new Date());
    // Check if the parsed date is valid
    if (isValid(date)) {
      // If valid, add the date to the dates array
      dates.push(date);
    }
  });
  // Return the array of found dates
  return dates;
};

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
