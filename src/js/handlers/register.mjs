import { register } from "../api/auth/register.mjs";
/**
 * this function handler our register function 
 */
export function setRegisterFormListner() {
  const form = document.querySelector("#registerForm");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    console.log(profile)
// register API
    register(profile)
  });
}
}