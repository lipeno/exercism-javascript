/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */


 export function cookingStatus(minutes) {
  if (minutes === 0) return 'Lasagna is done.';
  else if (minutes === undefined) return 'You forgot to set the timer.';
  else return 'Not done, please wait.';
 };

 export function preparationTime(layers, averagePreparationTime=2){
   return layers.length*averagePreparationTime;
 };

 export function quantities(layers){
  // For each noodle layer in your lasagna, you will need 50 grams of noodles
  let noodles = 0;
  layers.forEach(element => {
    if (element === 'noodles') noodles += 50;
  });

  // For each sauce layer in your lasagna, you will need 0.2 liters of sauce.
  let sauce = 0;
  layers.forEach(element => {
    if (element === 'sauce') sauce += 0.2;
  });

  return {noodles: noodles, sauce: sauce};
 };

 export function addSecretIngredient(friendsList = [], myList = []){
  myList.push(friendsList[friendsList.length-1]);
 };

 export function scaleRecipe(recipe = {}, numberOfPortions = 1){
  let defaultNumberOfPortions = 2;
  let newRecipe = {};
  for (const key in recipe) {
    newRecipe[key] = (recipe[key]/defaultNumberOfPortions)*numberOfPortions;
  }
  return newRecipe;
 };
