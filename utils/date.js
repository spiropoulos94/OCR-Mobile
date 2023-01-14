import {
  formatDistance,
  differenceInCalendarDays,
  // parseDate,
  isValid,
} from 'date-fns';

import parseDate from 'date-fns/parse';

export const extractDate = texts => {
  let dates = [];
  texts.forEach(text => {
    let dateRegex1 = /\b\d{1,2}[-\/]\d{1,2}[-\/]\d{4}\b/g; // formats: MM-DD-YYYY, DD-MM-YYYY, MM/DD/YYYY, DD/MM/YYYY
    let dateRegex2 = /\b\d{4}[-\/]\d{1,2}[-\/]\d{1,2}\b/g; // format: YYYY-MM-DD
    let dateRegex3 = /\b\d{1,2}\s[a-zA-Z]{3}\s\d{4}\b/g; // format: DD MMM YYYY
    let dateRegex4 = /\b[a-zA-Z]{3}\s\d{1,2},\s\d{4}\b/g; // format: MMM DD, YYYY

    let match;
    match = text.match(dateRegex1);
    if (match) {
      dates.push(...match);
    }
    match = text.match(dateRegex2);
    if (match) {
      dates.push(...match);
    }
    match = text.match(dateRegex3);
    if (match) {
      dates.push(...match);
    }
    match = text.match(dateRegex4);
    if (match) {
      dates.push(...match);
    }
  });
  return dates;
};

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
