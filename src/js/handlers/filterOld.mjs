import * as postsMethods from "../api/posts/index.mjs";
import { displayError } from "./error.mjs";
export async function oldPost() {
  const oldContainer = document.querySelector("#posts");

  const allPosts = await postsMethods.getPosts();

  const oldPosts = allPosts.sort((a, b) => {
    return a.id - b.id;
  });

  function filterOldPosts() {
    oldContainer.innerHTML = "";
    oldPosts.forEach(function (allOldPosts) {
      oldContainer.innerHTML += `
    <div class="post">
      <h3>${allOldPosts.title}</h3>
      <img
      src="${allOldPosts.media}"
      class="card-img-top"
      alt="post image"
    />
      <p>${allOldPosts.body}</p>
      <a href="/post/index.html?id=${allOldPosts.id}"> veiw post </a>
      </div>`;
    });
  }

  document.querySelector("#old").addEventListener("click", () => {
    filterOldPosts();
  });
}
