/**
 * this function display the error message
 * @param {string} message 
 * @returns 
 */

export function displayError(message = "Unknown error") {
  return `<div class="error">${message}</div>`;
}
