/**
 * Get and returns the value in the .env file
 * @param {string} name name of the env variable
 * @returns {string | undefined} value of the env variable
 */
export function envVar(name, fallback = "") {
  return process.env[`REACT_APP_${name}`] || fallback;
}
