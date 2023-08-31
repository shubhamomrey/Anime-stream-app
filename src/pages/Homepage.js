import React, { useState, useEffect } from "react";
import {
  AiFillApple,
  AiOutlineGoogle,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import "./homepage.css";
import Layout from "../components/Layout/Layout";
import ListingItem from "../components/ListingItem";


function Homepage() {
  
  const [imageSrc, setImageSrc] = useState("");

  

  useEffect(() => {
    const fetchImage = new Promise((resolve, reject) => {
      setTimeout(() => {
        const imageUrl = "food_all.jpg"; 
        resolve(imageUrl);
      }, 3000);
    });

    fetchImage.then((imageUrl) => {
      setImageSrc(imageUrl);
    });
  }, []);

  return (
    <Layout>
      <>
        <div className="image">
        {imageSrc && <img style={{height:50, width:200, marginTop:10}} src={imageSrc} alt="Donation content" />}
        </div>
        <div className="bg-image">
          <div>
            <span className="caption">
              Never forget what you've seen. Save what you want to watch next.
            </span>
            <br />
            <span className="caption2">Start tracking your anime today.</span>
          </div>
          <div className="bubbles">
            <img src="bubbles.png" alt="bubbles content" />
          </div>
          <div className="signin">
            <div className="signin1">
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="https://appleid.apple.com/auth/authorize?client_id=net.myanimelist.www&redirect_uri=https%3A%2F%2Fmyanimelist.net%2Fsns%2Fcallback%2Fapple&response_type=code%20id_token&state=280ad164731f18510179ba288d0c31526ad7b8a0&scope=email&response_mode=form_post"
              >
                <AiFillApple
                  style={{
                    fontSize: 30,
                    color: "white",
                  }}
                />{" "}
                Sign up with Apple
              </a>
            </div>
            <div className="signin2">
              <a
                style={{ color: "black", textDecoration: "none" }}
                href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&client_id=1010578254383-ip092pullea7sptsrasfucvs55bfcgud.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fmyanimelist.net%2Fsns%2Fcallback%2Fgoogle&scope=email&state=280ad164731f18510179ba288d0c31526ad7b8a0&prompt=select_account&service=lso&o2v=2&flowName=GeneralOAuthFlow"
              >
                <AiOutlineGoogle
                  style={{
                    fontSize: 30,
                    color: "black",
                  }}
                />{" "}
                Sign up with Google
              </a>
            </div>
            <div className="signin3">
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="https://m.facebook.com/login.php?skip_api_login=1&api_key=360769957454434&kid_directed_site=0&app_id=360769957454434&signed_next=1&next=https%3A%2F%2Fm.facebook.com%2Fv2.12%2Fdialog%2Foauth%3Fclient_id%3D360769957454434%26state%3D26ff8dc965b31c9b3e7f60f412ecc3b1%26response_type%3Dcode%26sdk%3Dphp-sdk-5.3.1%26redirect_uri%3Dhttps%253A%252F%252Fmyanimelist.net%252Fsns%252Fcallback%252Ffacebook%26scope%3Demail%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D1709c88a-d73d-42b9-8dcd-289defca37a0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fmyanimelist.net%2Fsns%2Fcallback%2Ffacebook%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D26ff8dc965b31c9b3e7f60f412ecc3b1%23_%3D_&display=touch&locale=en_GB&pl_dbl=0&refsrc=deprecated&_rdr"
              >
                <AiFillFacebook
                  style={{
                    fontSize: 30,
                    color: "white",
                  }}
                />
                Sign up with facebook
              </a>
            </div>
            <div className="signin4">
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="https://api.twitter.com/oauth/authenticate?oauth_token=KyVDOwAAAAAAuYNAAAABij2ZN20"
              >
                <AiOutlineTwitter
                  style={{
                    fontSize: 30,
                    color: "white",
                  }}
                />
                Sign up with Twitter
              </a>
            </div>{" "}
            <hr className="hr-tag" />
            <span className="hr-tag2"> Or </span> <hr className="hr-tag3" />
            <div className="signin5">
              <a
                style={{ color: "white" }}
                href="https://myanimelist.net/register.php?from=%2F&email_only=1&click_type=top_signup_area_button&click_param=mail"
              >
                {" "}
                Sign up with email
              </a>
            </div>
          </div>
        </div>
        <div className="heading" >Welcome to MyAnimeList.net
        </div>
        <ListingItem/>
        
      </>
    </Layout>
  );
}

export default Homepage;
