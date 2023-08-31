import React from 'react'
import "./slide.css";

function Summery() {
  return (
    <div className='summery'>
        <div>
            <div>
            <h6>Top Anime</h6>
              <p className="p-more" style={{ fontSize: "small" }}>More</p>
            </div>
            <hr/>
            <di>
                <ol style={{ fontSize: "small" }}>
                    <li >Fullmetal Alchemist: Brotherhood</li>
                    <li> Steins;Gate</li>
                    <li> Bleach: Sennen Kessen-hen</li>
                    <li> Gintama°</li>
                    <li> Shingeki no Kyojin Season 3 Part 2</li>
                </ol>
            </di>
        </div>
        <div style={{marginLeft: 30, marginRight: 30}}>
            <div>
            <h6>Top Airing Anime</h6>
              <p className="p-more" style={{ fontSize: "small" }}>More</p>
            </div>
            <hr/>
            <di>
                <ol style={{ fontSize: "small" }}>
                    <li > Shingeki no Kyojin: The Final Season - Kanketsu-hen</li>
                    <li> Bleach: Sennen Kessen-hen - Ketsubetsu-tan</li>
                    <li> Jujutsu Kaisen 2nd Season</li>
                    <li> Bungou Stray Dogs 5th Season</li>
                    <li> One Piece</li>
                </ol>
            </di>
        </div>
        <div>
            <div>
            <h6>Most Popular Characters</h6>
              <p className="p-more" style={{ fontSize: "small" }}>More</p>
            </div>
            <hr/>
            <di>
                <ol style={{ fontSize: "small" }}>
                    <li > Lamperouge, Lelouch</li>
                    <li> Levi</li>
                    <li>  Monkey D., Luffy</li>
                    <li>  Lawliet, L</li>
                    <li> Roronoa, Zoro</li>
                </ol>
            </di>
        </div>
        
    </div>
  )
}

export default Summery