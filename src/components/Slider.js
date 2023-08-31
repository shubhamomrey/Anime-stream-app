import React from "react";
import "./slide.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Slider(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  const responsive1 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div>
      <h6 style={{fontWeight: "bold"}}>Summer 2023 Anime</h6>  
        <hr style={{width:770}}/>
      <div className="carousel">
        <Carousel
         
          responsive={responsive}
          swipeable={false}
          draggable={true}
          showDots={false}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={props.deviceType !== "mobile" ? true : false}
          // autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-10-px"
        >
          <div >
            <img src="b1.webp" alt="alt" />
            <p className="para">Hatarku Maou-sama</p>
           
          </div>
          <div >
            <img src="b2.webp" alt="alt" />
            <p className="para">Jitsu wa Ore</p>
          </div>
          <div >
            <img src="b3.webp" alt="alt" />
            <p className="para">Yumemiru Danshi</p>
          </div>
          <div >
            <img src="b4.webp" alt="alt" />
            <p className="para">Rurouni Kenshin</p>
          </div>

          <div>
            <img src="b5.webp" alt="alt" />
            <p className="para">Jujutsu Kaisen </p>
          </div>
          <div >
            <img src="b6.webp" alt="alt" />
            <p className="para">Mushoku Tensei II</p>
          </div>
          <div >
            <img src="b7.webp" alt="alt" />
            <p className="para">Zom 100</p>
          </div>
          <div >
            <img src="b8.webp" alt="alt" />
            <p className="para">Tate no Yuusha</p>
          </div>
          <div >
            <img src="b9.webp" alt="alt" />
            <p className="para">Horimiya: Piece</p>
          </div>
          <div >
            <img src="b10.webp" alt="alt" />
            <p className="para">Goblin Slayer II</p>
          </div>
          <div >
            <img src="b11.webp" alt="alt" />
            <p className="para">Watashi no Shiawase</p>
          </div>
         
        </Carousel>
      </div>
      <h6 style={{fontWeight: "bold"}}>Letest Updeted Episode Video </h6>
       <hr style={{width: 770}}/>
      <div className="carousel1">
        <Carousel
         
          responsive={responsive1}
          swipeable={false}
          draggable={true}
          showDots={false}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={props.deviceType !== "mobile" ? true : false}
          // autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-10-px"
        >
          <div >
            <img src="73245.webp" alt="alt" />
            <p className="para">Episode 1 &#x1F451;</p>
           
          </div>
          <div >
            <img src="131578.webp" alt="alt" />
            <p className="para">Episode 2 &#x1F451;</p>
          </div>
          <div >
            <img src="131669.webp" alt="alt" />
            <p className="para">Episode 3 &#x1F451;</p>
          </div>
          <div >
            <img src="134525.webp" alt="alt" />
            <p className="para">Episode 4 &#x1F451;</p>
          </div>

          <div >
            <img src="136000.webp" alt="alt" />
            <p className="para">Episode 5 &#x1F451;</p>
          </div>
          <div >
            <img src="133335.webp" alt="alt" />
            <p className="para">Episode 6 &#x1F451;</p>
          </div>
          <div >
            <img src="136232.webp" alt="alt" />
            <p className="para">Episode 7 &#x1F451;</p>
          </div>
          <div >
            <img src="136274.webp" alt="alt" />
            <p className="para">Episode 8 &#x1F451;</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Slider;
