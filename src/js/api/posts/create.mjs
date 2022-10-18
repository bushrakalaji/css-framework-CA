import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = `/posts`;
const method = "post";
/**
 * this function let us create post
 * @param {string} postData
 * @returns
 */
export async function createPost(postData) {
  const createPostURL = API_SOCIAL_URL + action;

  const response = await authFetch(createPostURL, {
    method: "post",
    body: JSON.stringify(postData),
  });
  const result = await response.json();
  alert("Your post has created");
  window.location.replace("/posts/index.html");
  return result;
}
