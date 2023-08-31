import React from "react";
import Slider from "./Slider";
import Articles from "./Articles";
import Sidebar from "./Sidebar";
import Summery from "./Summery";



function ListingItem() {
  return (
    <>
    <div style={{ marginLeft: 70 }}>
     
      <hr style={{position: "relative" ,transform: "rotate(90deg)", marginLeft: 400, top: 400 }}/>
      <h6 style={{fontWeight: "bold"}}>MALxJapan -More than just anime-</h6>
      <hr style={{ width: 770 }} />
      <div style={{ display: "flex", width: 900 }}>
        <div className="card" style={{ width: 250 }}>
          <img src="1.png" className="card-img-top" alt="alt" />
          <div className="card-body">
            <p className="card-text">
              Learn how to draw anime & manga from Japanese pros🎨
            </p>
          </div>
        </div>
        <div className="card" style={{ width: 250, marginLeft: 10 }}>
          <img src="2.png" className="card-img-top" alt="alt" />
          <div className="card-body">
            <p className="card-text">
              Request the item you’ve been looking for on Otsukai - get 10% off
            </p>
          </div>
        </div>
        <div className="card" style={{ width: 250, marginLeft: 10 }}>
          <img src="3.png" className="card-img-top" alt="alt" />
          <div className="card-body">
            <p className="card-text">
              👑 Cutest couple? 👑 Oh so smug? See who won!
            </p>
          </div>
        </div>
      </div>
      <Slider/>
      <Articles/>
      <Sidebar/>
     <Summery/>
    </div>
    </>
  );
}

export default ListingItem;
