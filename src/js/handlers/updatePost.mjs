import { getPost, updatePost} from "../api/posts/index.mjs"
import { displayError } from "./error.mjs";
/**
 * this function handler our update function 
 */
export async function setUpdatePostFormListner() {
  try{
  const form = document.querySelector("#editPost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

if (form) { 
 const post = await getPost(id)
 form.title.value = post.title;
 form.body.value = post.body;
 form.tags.value = post.tags;

    form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const post = Object.fromEntries(formData.entries());
    post.id = id ; 
// login API
    updatePost(post)
  });
}} catch (error) {
  container.innerHTML += displayError(
    "An error occurred when calling the API"
  );
} 

}