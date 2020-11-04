'use strict';

const isHexadecimal = require('is-hexadecimal');
const mappings = require('./mappings');

// char is a string character
const convertCharacter = (char) => {
  if (typeof char !== 'string') {
    return char;
  }
  const charLength = Array.from(char).length;
  if (charLength <= 0 || charLength > 1) {
    return char;
  }

  let charKey = char.codePointAt(0).toString(16).toUpperCase();

  let newChar = mappings.reduce((value, mapping) => {
    return mapping[value] || value;
  }, charKey);

  if (typeof newChar === 'string' && Array.from(newChar).length === 1) {
    return newChar;
  }
  if (isHexadecimal(newChar)) {
    return String.fromCodePoint(parseInt(newChar, 16));
  }
  return newChar;
};

const convertString = (str) => {
  if (typeof str !== 'string') {
    return str;
  }
  return Array.from(str).map(char => convertCharacter(char)).join('')
};

module.exports = Object.freeze({
  convertCharacter,
  convertString
});
