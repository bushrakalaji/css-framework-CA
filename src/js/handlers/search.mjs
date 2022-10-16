import * as postsMethods from "../api/posts/index.mjs";
let posts = [];
/**
 * this function allows us to search by title
 */
export async function searchFunction() {
  const container = document.querySelector("#posts");
  const posts = await postsMethods.getPosts();

  const searchBar = document.querySelector(".search-bar");

  searchBar.addEventListener("keyup", handelNameControlInput);

  function handelNameControlInput(event) {
    const inputValue = event.currentTarget.value.toLowerCase();
    const filteredResult = posts.filter((post) => {
      return post.title.toLowerCase().includes(inputValue);
    }); 
    
container.innerHTML ="";

filteredResult.forEach(function(filteredPosts)
{

    container.innerHTML += `
    <div class="post">
    <h3>${filteredPosts.title}</h3>
    <img
    src="${filteredPosts.media}"
    class="card-img-top"
    alt="post image"
  />
    <p>${filteredPosts.body}</p>
    <a href="/post/index.html?id=${filteredPosts.id}"> veiw post </a>
    
    </div>
    
    `

})
  }


}
