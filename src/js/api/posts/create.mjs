import { API_SOCIAL_URL } from "../constants.mjs"

import { authFetch } from "../authFetch.mjs";

const action = `/posts`;

export async function createPost(postData) {
  const createPostURL = API_SOCIAL_URL + action;

  const response = await authFetch(createPostURL, {
      method: "post",
    body: JSON.stringify(postData),
  })
  
  return await response.json();
}
