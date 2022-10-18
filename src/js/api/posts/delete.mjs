import { API_SOCIAL_URL } from "../constants.mjs";
import { displayError } from "../../handlers/error.mjs";
import { authFetch } from "../authFetch.mjs";

const action = `/posts`;
const method = `delete`;

/**
 * this function let us delete post by id
 * @param {string} id 
 * @returns 
 */
export async function removePost(id) {
  try {
    if (!id) {
        throw new Error("Delete requires a postID")
    }
  const removePostURL = `${API_SOCIAL_URL}${action}/${id} `;
  const response = await authFetch(removePostURL, {
    method
  });
  alert ("Your post has deleted")
  window.location.replace("/posts/index.html")
  
  return await response.json();
} catch (error) {
  container.innerHTML += displayError(
    "An error occurred when calling the API"
  );
}


}
