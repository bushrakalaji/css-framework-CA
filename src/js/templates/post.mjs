import { API_SOCIAL_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";
import { removePost } from "../api/posts/delete.mjs";
import { displayError } from "../handlers/error.mjs";
/**
 * Allows us to view single post from the api by id
 */
export async function singleresult() {
  const singleResult = document.querySelector("#post");
  try {
    const accessToken = localStorage.getItem("profile");
    const myAuther = JSON.parse(accessToken);
    const accurateAuther = myAuther.name;
    console.log(accurateAuther);

    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");
    const singleUrl = API_SOCIAL_URL + "/posts/" + id + "?_author=true";
    const responce = await authFetch(singleUrl);
    const singleR = await responce.json();

    /**
     * This function works when this condition (singleR.author.name === accurateAuther) is met
     */
    function myOwnPosts() {
      singleResult.innerHTML += `<div>
    <h3>${singleR.author.name}</h3>
    <h4>${singleR.title}</h4>
    <img
    src="${singleR.media}"
    class="card-img-top"
    alt="post image"
  />
  <p>${singleR.body}</p>
  <button id="removePost" class="btn btn-outline-danger">Delete</button>
  <a href="/post/edit/index.html?id=${singleR.id}" class="btn btn-outline-secondary"> Edit post </a>
    
    
    </div>`;
    }

    /**
     * This function works when this condition (singleR.author.name === accurateAuther) is not fulfilled.
     */
 
    function othersPosts() {
      singleResult.innerHTML += `<div>
      <h3>${singleR.author.name}</h3>
      <h4>${singleR.title}</h4>
      <img
      src="${singleR.media}"
      class="card-img-top"
      alt="post image"
    />
    <p>${singleR.body}</p>
      
      
      </div>`;
    }

    if (singleR.author.name === accurateAuther) {
      myOwnPosts();

      deletePost();
    } else {
      othersPosts();
    }
    /**
     * This function to add event listener to delete button when if condition is met
     */
    function deletePost() {
      document.querySelector("#removePost").addEventListener("click", () => {
        removePost(id);
      });
    }
  } catch (error) {
    singleResult.innerHTML += displayError(
      "An error occurred when calling the API"
    );
  }
}
