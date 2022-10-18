import * as postsMethods from "../api/posts/index.mjs";
import { displayError } from "./error.mjs";
/**
 * This function filters posts to get posts of the logged-in person
 */
export async function postsFilter() {
    const myContainer = document.querySelector("#herePost");
  try {
    const accessToken = localStorage.getItem("profile");

    const myAuther = JSON.parse(accessToken);
    const accurateAuther = myAuther.name;

    

    console.log(accurateAuther);

    const mYposts = await postsMethods.getPosts();
    console.log(mYposts);
    const newPosts = mYposts.filter(function ({ author }) {
      if (author.name === accurateAuther) {
        return true;
      }
    });

    newPosts.forEach(function (mySingelPost) {
      myContainer.innerHTML += `
    
    <div class="post">
    <h3>${mySingelPost.title}</h3>
    <img
    src="${mySingelPost.media}"
    class="card-img-top"
    alt="post image"
  />
    <p>${mySingelPost.body}</p>
    <a href="/post/index.html?id=${mySingelPost.id}" class="btn btn-outline-secondary"> veiw post </a>
    
    </div>
    
    `;
    });
  } catch (error) {
    myContainer.innerHTML += displayError(
      "An error occurred when calling the API"
    );
  }
}
