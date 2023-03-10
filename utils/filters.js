export const SortProducts = (sortOrder, products) => {
  let toBeSorted = [...products];
  switch (sortOrder) {
    case 'AddedDateAsc':
      // code block
      toBeSorted.sort((a, b) => b.addedOn - a.addedOn);

      return toBeSorted;
    // break;
    case 'AddedDateDesc':
      toBeSorted.sort((a, b) => b.addedOn + a.addedOn);

      return toBeSorted;
    // code block
    case 'ExpDateAsc':
      toBeSorted.sort((a, b) => b.expDateTs + a.expDateTs);
      return toBeSorted;
    case 'ExpDateDesc':
      toBeSorted.sort((a, b) => b.expDateTs - a.expDateTs);
      return toBeSorted;
    default:
    // code block
  }
};
