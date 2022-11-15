// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let sameTypeCounter = 0;
  stack.forEach(element => {
    if (element === card) sameTypeCounter++;
  });
  return sameTypeCounter;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  // (type = true is analogous to 'even', and false is analogous to 'odd').
  const TYPE_EVEN = true;
  let evenCounter = 0;
  for (const iterator of stack) {
    // count even numbers
    if (iterator % 2 === 0) {
      evenCounter++;
    }
  }

  if (type === TYPE_EVEN) {
    return evenCounter;
  }
  else{
    return stack.length ? (stack.length - evenCounter) : 0;
  }
}
