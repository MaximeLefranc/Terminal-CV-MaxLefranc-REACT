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
    case 'ls':
      return data[lang].ls;
    case 'cat profile':
      return data[lang].profile;
    case 'github': {
      window.open('https://github.com/MaximeLefranc?tab=repositories');
      return [];
    }
    case 'awesome': {
      // https://www.youtube.com/watch?v=dQw4w9WgXcQ
      window.open(
        'https://www.youtube.com/watch?v=w0AOGeqOnFY',
        'targetWindow',
        `toolbar=no,
        location=no,
        status=no,
        menubar=no,
        scrollbars=no,
        resizable=yes,
        width=600,
        height=400`,
      );
      return [];
    }
    default: {
      if (inputValue !== '') {
        if (lang === 'fr') {
          return [{ command: `${inputValue} est une commande inconnue`, text: '' }];
        }
        return [{ command: `${inputValue} is an unknown command`, text: '' }];
      }
      return [];
    }
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
