export const removeDuplicates = arr => {
  let unique = [];
  arr.filter(function (item) {
    if (unique.indexOf(item) === -1) {
      unique.push(item);
    }
  });
  return unique;
};
