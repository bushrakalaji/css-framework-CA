import { login } from "../api/auth/login.mjs";
import { displayError } from "./error.mjs";
/**
 * this function handler our login function
 */
export function setLoginFormListner() {
  const form = document.querySelector("#loginForm");
  try {
    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());

        // login API
        login(profile);
      });
    }
  } catch (error) {
    form.innerHTML += displayError(
      "An error occurred when calling the API"
    );
  }
}
