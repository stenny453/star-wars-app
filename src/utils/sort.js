/**
 * Sorts an array of objects based on a given criteria.
 *
 * @param {Array} array - The array of objects to be sorted.
 * @param {string} criteria - The criteria used for sorting the objects.
 * @return {Array} The sorted array of objects.
 */
const sort = (array, criteria) => array.sort((firstObject, secondObject) => {
  if (firstObject[criteria] > secondObject[criteria]) {
    return 1;
  }
  if (firstObject[criteria] < secondObject[criteria]) {
    return -1;
  }
  return 0;
});

export default sort;
