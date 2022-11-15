// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return Number(array1.join("")) + Number(array2.join(""));
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  // Palindromic numbers remain the same when the digits are reversed.
  // Convert the number to string
  let valueString = String(value);

  // Then convert the number to array, reverse the array and converted the reversed array to string
  let valueArray = valueString.split("");
  let reversedValueArray = valueArray.reverse();
  let reversedValueString = reversedValueArray.join('');

  // Compare the initial string and the reversed string
  if (reversedValueString === valueString) return true;
  else return false;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input){
    // If the input does not represent a non-zero number 'Must be a number besides 0' should be returned.
    // In all other cases, you can assume the input is valid, the return value should be an empty string.
    return Number(input)? "" : 'Must be a number besides 0';
  }
  else{
    // If the user did not provide any input, errorMessage should return 'Required field'.
    return 'Required field';
  }
}
