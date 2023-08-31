import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import "./Header.css";

function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ marginLeft: 70, marginRight: 70 }}
      >
        <div className="container">
          <Link
            style={{
              color: "#1c439b",
              height: 36,
              width: 190,
              fontFamily: "Verdana,Arial",
              fontWeight: "bolder",
              TextDecoder: "none",
              margin: 0,
              padding: 0,
            }}
            className="navbar-brand"
            to="/"
          >
            MyAnimeList
          </Link>
          <div style={{marginLeft: 210}}>
            <img style={{width:250,borderRadius:5,border:'2px solid rgba(0, 0, 0, 1.0)'}} src="mini-banner.png"/>
          </div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  style={{
                    color: "white",
                    backgroundColor: "#eb6100",
                    borderRadius: 2,
                    width: 110,
                    textAlign: "center",
                    fontWeight: 700,
                    fontSize: 14,
                    marginLeft: 8,
                    padding: 4,
                    border: "2px solid #eb6100",
                  }}
                  className="nav-link active"
                  aria-current="page"
                  to="/hide-adds"
                >
                  Hide Ads
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{
                    color: "#1c439b",
                    borderRadius: 2,
                    width: 90,
                    textAlign: "center",
                    fontWeight: 700,
                    fontSize: 14,
                    marginLeft: 8,
                    padding: 4,
                    border: "2px solid #1c439b",
                  }}
                  className="nav-link active"
                  aria-current="page"
                  to="/signin"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{
                    color: "white",
                    backgroundColor: "#2e51a2",
                    borderRadius: 2,
                    width: 110,
                    textAlign: "center",
                    fontWeight: 700,
                    fontSize: 14,
                    marginLeft: 8,
                    padding: 4,
                    border: "2px solid #2e51a2",
                  }}
                  className="nav-link active"
                  aria-current="page"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="second-nav">
        <div className="dropdown-items">
          <div className="dropdown">
            <button className="dropbtn">Anime</button>
            <div className="dropdown-content">
              <a href="#">Search Anime</a>
              <a href="#">Top Anime</a>
              <a href="#">Seasional Anime</a>
              <a href="#">Videos</a>
              <a href="#">Reviews</a>
              <a href="#">Recommendations</a>
              <a href="#">2023 Challenge</a>
              <a href="#">Fantacy Anime League</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Manga</button>
            <div className="dropdown-content">
              <a href="#">Manga Search</a>
              <a href="#">Top Manga</a>
              <a href="#">Manga store</a>
              <a href="#">Reviews</a>
              <a href="#">Recommendations</a>
              <a href="#">2023 Challenge</a>
              
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Community</button>
            <div className="dropdown-content">
            <a href="#">Interest Stack</a>
            <a href="#">Forums</a>
            <a href="#">Clubs</a>
            <a href="#">Blogs</a>
            <a href="#">Users</a>
           
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Industry</button>
            <div className="dropdown-content">
            <a href="#">News</a>
            <a href="#">Featured Article</a>
            <a href="#">People</a>
            <a href="#">Characters</a>
            <a href="#">Companies</a>
            <a href="#">MALxJapan</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Watch</button>
            <div className="dropdown-content">
            <a href="#">Episode Videos</a>
            <a href="#">Anime Trailers</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Read</button>
            <div className="dropdown-content">
            <a href="#">Manga Store</a>
            
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Hepl</button>
            <div className="dropdown-content">
            <a href="#">About</a>
            <a href="#">Support</a>
            <a href="#">Advertising</a>
            <a href="#">FAQ</a>
            <a href="#">Report</a>
            <a href="#">Staff</a>
            <a href="#">MAL Supporter</a>
            <a href="#"></a>
            </div>
          </div>
        </div>
        <div className="search">
          <select>
            <option value="volvo">All</option>
            <option value="saab">Anime</option>
            <option value="opel">Manga</option>
            <option value="audi">Characters</option>
            <option value="audi">People</option>
            <option value="audi">Companies</option>
            <option value="audi">Manga Store</option>
            <option value="audi">News</option>
            <option value="audi">Featured Articles</option>
            <option value="audi">Forums</option>
            <option value="audi">Clubs</option>
            <option value="audi">Users</option>
          </select>

          <input type="text" placeholder="Search" name="search" />
          <button type="submit">
            <AiOutlineSearch />
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
