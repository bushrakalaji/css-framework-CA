import * as listeners from "./handlers/index.mjs"
import * as postsMethods from "./api/posts/index.mjs"
import { postsTamplate } from "./templates/posts.mjs";
import {singleresult } from "./templates/post.mjs"
const path = location.pathname;

if (path === '/profile/login/index.html') {
  listeners.setLoginFormListner()
} else if (path === '/profile/register/index.html') {
 listeners.setRegisterFormListner()
}else if (path === '/post/create/index.html') {
  listeners.setCreatePostFormListner()
}else if (path === '/post/edit/index.html') {
  listeners.setUpdatePostFormListner()
}else if (path === '/posts/index.html'){
  postsTamplate()
} else if (path === '/post/index.html'){
  singleresult ()
}


