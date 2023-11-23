import React, {useEffect} from "react";
import { useSocialSignup } from "../hooks/useSocialSignup";
import { useAuthContext } from "../context/AuthContext";
import {
  facebookProvider,
  twitterProvider,
  githubProvider,
} from "../firebase/auth";
import GithubIcon from "../assets/giticon.jpg";
import TwitterIcon from "../assets/xicon.png";
import FacebookIcon from "../assets/facebookicon.png";
import './Auth.css';

export default function Auth() {
   const { user } = useAuthContext();
   useEffect(() => console.log(user), [user]);   


  const facebook = useSocialSignup(facebookProvider);
  const twitter = useSocialSignup(twitterProvider);
  const github = useSocialSignup(githubProvider);

  return (
    <div className="utility__page">
      <h1>Welcome to my Auth Page</h1>

      <button onClick={facebook.signInWithSocial}>
        <img src={FacebookIcon} alt="" />
        <span>facebook</span>
      </button>

      <button onClick={twitter.signInWithSocial}>
        <img src={TwitterIcon} alt="" />
        <span>Twitter</span>
      </button>

      <button onClick={github.signInWithSocial}>
        <img src={GithubIcon} alt="" />
        <span>GitHub</span>
      </button>
    </div>
  );
}
