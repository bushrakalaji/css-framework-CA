import { API_SOCIAL_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";
import { removePost } from "../api/posts/delete.mjs";
/**
 * Allows us to view single post from the api by id
 */
export async function singleresult() {
  const singleResult = document.querySelector("#post");
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  const singleUrl = API_SOCIAL_URL + "/posts/"+ id +"?_author=true";
  const responce = await authFetch(singleUrl);
  const singleR = await responce.json();

  singleResult.innerHTML += `<div>
    <h3>${singleR.author.name}</h3>
    <h4>${singleR.title}</h4>
    <img
    src="${singleR.media}"
    class="card-img-top"
    alt="post image"
  />
  <p>${singleR.body}</p>
  <button id="removePost">delete</button>
  <a href="/post/edit/index.html?id=${singleR.id}"> edit post </a>
    
    
    </div>`;


    document.querySelector("#removePost").addEventListener("click", () => {
        removePost(id);
    })
}
