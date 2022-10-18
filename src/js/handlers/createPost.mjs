import { createPost } from "../api/posts/index.mjs";
import { displayError } from "./error.mjs";
/**
 * this function handler our createPost function
 */
export function setCreatePostFormListner() {
    const form = document.querySelector("#createPost");
  try {
  
    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const post = Object.fromEntries(formData.entries());
        // create post API
        console.log(post);
        createPost(post);
      });
    }
  } catch (error) {
    form.innerHTML += displayError(
      "An error occurred when calling the API"
    );
  }
}
