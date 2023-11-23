import {
  getAuth,
  FacebookAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
import app from "./init";

const auth = getAuth(app);
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export { auth, facebookProvider, githubProvider, twitterProvider };
