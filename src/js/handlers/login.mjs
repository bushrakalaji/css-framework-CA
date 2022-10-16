import { login } from "../api/auth/login.mjs";
/**
 * this function handler our login function 
 */
export function setLoginFormListner() {
  const form = document.querySelector("#loginForm");
if (form) {
      form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

// login API
    login(profile) 
  });

}
}

