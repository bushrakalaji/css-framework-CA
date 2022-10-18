import * as postsMethods from "../api/posts/index.mjs";

export async function postsFilter() {
  const accessToken = localStorage.getItem("profile");
  const myAuther = JSON.parse(accessToken);
  const accurateAuther = myAuther.name;
  
  const myContainer = document.querySelector("#herePost");
  console.log(accurateAuther);

  const mYposts = await postsMethods.getPosts();
  console.log(mYposts);
  const newPosts = mYposts.filter(function ({author}) {
    if (author.name === accurateAuther) {
      return true;
    }
  });
  console.log(newPosts)
  
newPosts.forEach(function(mySingelPost){

    myContainer.innerHTML += `
    
    <div class="post">
    <h3>${mySingelPost.title}</h3>
    <img
    src="${mySingelPost.media}"
    class="card-img-top"
    alt="post image"
  />
    <p>${mySingelPost.body}</p>
    <a href="/post/index.html?id=${mySingelPost.id}"> veiw post </a>
    
    </div>
    
    `



})

  ;
}
