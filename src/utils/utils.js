import data from '../data';

/**
 * Return array of responses if command's user exist
 * @param {string} lang -> selectioned lang of user
 * @param {string} inputValue -> command user
 * @returns {Array}
 */
export function searchCommand(lang, inputValue) {
  switch (inputValue) {
    case 'help':
      return data[lang].help;
    default:
      return [];
  }
}

/**
 * Return a new unique id
 * @param {Array} array array object
 * @returns {number}
 */
export function getNewId(array) {
  if (array.length === 0) {
    return 1;
  }
  const idsArray = array.map((item) => item.id);
  return Math.max(...idsArray) + 1;
}
