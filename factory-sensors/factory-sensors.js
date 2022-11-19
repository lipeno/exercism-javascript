// @ts-check

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage > 70) throw new Error('The percentage exceeds 70%');
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(temperature) {
  // If the sensor is broken, the temperature will be null. In this case, you should throw an ArgumentError.
  if (temperature === null) throw new ArgumentError("Sensor is broken");

  // if the temperature of a machine exceeds 500°C, the technicians start worrying about overheating.
  if (temperature > 500) throw new OverheatingError(temperature);
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(actions) {
  const {check, alertDeadSensor, alertOverheating, shutdown} = actions;

  try {
    check();
  } catch (error) {
    if (error instanceof ArgumentError) alertDeadSensor();
    else if (error instanceof OverheatingError) (error.temperature < 600)? alertOverheating() : shutdown();
    else throw error;
  }
}
