import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="row bg-primary text-light">
      <div className="d-flex justify-content-center">
        <div className="d-flex align-items-center">
          <span>Follow Us</span>
          <Link
            to="https://www.facebook.com/OfficialMyAnimeList"
            target="_blank"
          >
            <FaFacebookF
              className="mx-3"
              style={{
                fontSize: 30,
                border: 1,
                color: "blue",
                backgroundColor: "white",
                borderRadius: 5,
                padding: 5,
              }}
            />
          </Link>
          <Link to="https://twitter.com/myanimelist" target="_blank">
            <FaTwitter
              style={{
                fontSize: 30,
                border: 1,
                color: "blue",
                backgroundColor: "white",
                borderRadius: 5,
                padding: 5,
              }}
            />
          </Link>
          <Link
            to="https://www.instagram.com/myanimelistofficial/"
            target="_blank"
          >
            <FaInstagram
              className="mx-3"
              style={{
                fontSize: 30,
                border: 1,
                color: "blue",
                backgroundColor: "white",
                borderRadius: 5,
                padding: 5,
              }}
            />
          </Link>
          <Link to="https://discord.com/invite/myanimelist" target="_blank">
            <FaDiscord
              style={{
                fontSize: 30,
                border: 1,
                color: "blue",
                backgroundColor: "white",
                borderRadius: 5,
                padding: 5,
              }}
            />
          </Link>
        </div>
        <div className="d-flex align-items-center mx-5">
          <span>Get the App</span>
          <Link
            to="https://apps.apple.com/us/app/myanimelist-official/id1469330778?md=8&ct=pc_footer"
            target="_blank"
          >
            <img src="/apple.png" alt="apple" style={{ height: 40 }} />
          </Link>
          <Link
            to="https://play.google.com/store/apps/details?utm_campaign=pc_footer&id=net.myanimelist.app&utm_source=mal"
            target="_blank"
          >
            <img src="/android.png" alt="apple" style={{ height: 115 }} />
          </Link>
        </div>
      </div>
      <hr style={{ width: 650, marginLeft: 300 }} />
      <div className="d-flex justify-content-center align-items-center m-2">
        <span>Home</span>
        <span className="mx-3">|</span>
        <span>About</span>
        <span className="mx-3">Press Room</span>
        <span>Support</span>
        <span className="mx-3"> Advertising</span>
        <span> FAQ</span>
        <span className="mx-3"> Terms</span>
        <span> Privacy</span>
        <span className="mx-3"> Cookie</span>
        <span> Notice at Collection</span>
        <span className="mx-3"> Sitemap</span>
        <span>|</span>
        <span className="mx-3">Login</span>
        <span> Sign Up</span>
      </div>
      <div className="d-flex justify-content-center align-items-center m-2">
        <span style={{ marginRight: 50 }} disabled>
          Recommended
        </span>
        <a
          target="_blank"
          href="https://otakumode.com/?utm_source=mal&utm_medium=media_link&utm_content=mal_link&utm_campaign=ad_mal_footer"
          rel="noreferrer"
          className="mx-3"
          style={{ color: "white", textDecoration: "none" }}
        >
          <img
            src="icon_tom30.png"
            alt="otsukai icon"
            style={{ height: 20, marginRight: 10 }}
          />
          Tokyo Otaku Mode
        </a>
        <a
          target="_blank"
          href="https://www.honeyfeed.fm/"
          rel="noreferrer"
          className="mx-3"
          style={{ color: "white", textDecoration: "none" }}
        >
          <img
            src="./honeyfeed.png"
            alt="honeyfeed icon"
            style={{ height: 20, marginRight: 10 }}
          />
          Honeyfeed
        </a>
        <a
          target="_blank"
          href="https://myanimelist.net/store"
          rel="noreferrer"
          className="mx-3"
          style={{ color: "white", textDecoration: "none" }}
        >
          <img
            src="icon-manga-store.png"
            alt="manga icon"
            style={{ height: 20, marginRight: 10 }}
          />
          Manga Store
        </a>
        <a
          target="_blank"
          href="https://otsukai.com/"
          rel="noreferrer"
          className="mx-3"
          style={{ color: "white", textDecoration: "none" }}
        >
          <img
            src="icon_otsukai.png"
            alt="otsukai icon"
            style={{ height: 20, marginRight: 10 }}
          />
          Otsukai
        </a>
      </div>
      <div>
        <span
          className="d-flex justify-content-center "
          style={{ fontSize: "small" }}
        >
          MyAnimeList.net is a property of MyAnimeList Co.,Ltd. &copy; 2023 All
          Rights Reserved.
        </span>
        <p
          className="d-flex justify-content-center "
          style={{ fontSize: "x-small" }}
        >
          MyAnimeList.net is a property of MyAnimeList Co.,Ltd.
        </p>
      </div>
    </div>
  );
};

export default Footer;
