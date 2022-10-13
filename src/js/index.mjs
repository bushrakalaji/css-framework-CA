import { setRegisterFormListner } from "./handlers/register.mjs";
import { setLoginFormListner } from "./handlers/login.mjs";
import * as posts from "./api/posts/index.mjs"
import * as post from "./api/posts/index.mjs";

const path = location.pathname;

if (path === '/profile/login/index.html') {
  setLoginFormListner()
} else if (path === '/profile/register/index.html') {
  setRegisterFormListner()
}

// post.createPost()
// post.updatePost()
// post.removePost()
// post.getPost()
post.getPosts().then(console.log)

 
