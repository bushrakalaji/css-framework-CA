import { API_SOCIAL_URL } from "../constants.mjs";
import * as storege from "../../storage/index.mjs"

const action = "/auth/login";
const method = "post";

export async function login(profile) {
  const loginURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);
  const response = await fetch(loginURL, {
    headers: {
      "Content-type": "application/json",
    },
    method,
    body,
  });

  const {accessToken, ...user} = await response.json();
  
  storege.save("token", accessToken)
  storege.save ("profile" , user)
  alert ("You are now logged in")

window.location.replace("/posts/index.html")
}
