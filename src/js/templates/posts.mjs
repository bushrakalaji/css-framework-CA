import * as postsMethods from "../api/posts/index.mjs";
import { searchFunction } from "../handlers/search.mjs";
import { displayError } from "../handlers/error.mjs";
import { oldPost } from "../handlers/filterOld.mjs";
/**
 * this function Allows us to view posts from the api on html
 */
export async function postsTamplate() {
  const container = document.querySelector("#posts");
  try {
    const posts = await postsMethods.getPosts();
    container.innerHTML = "";

    posts.forEach(function (post) {
      container.innerHTML += `
  <div class="post mb-5 border">
  <h3>${post.author.name}</h3>
  <h4>${post.title}</h4>
  <img
  src="${post.media}"
  class="card-img-top"
  alt="post image"
/>
  <p>${post.body}</p>
  <a href="/post/index.html?id=${post.id}" class="btn btn-outline-secondary"> veiw post </a>
  
  </div>
`;
    });

    oldPost();
    searchFunction();
  } catch (error) {
    container.innerHTML += displayError(
      "An error occurred when calling the API"
    );
  }
}
