

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import SliderContainer from "./SliderContainer";
import SecondSliderContainer from "./SecondSliderContainer";

function FourthPrize() {
  const [isCardVisible, setIsCardVisible] = useState(true);

  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
  const [revealPrize , setRevealPrize] = useState(false);
  const [showWinners , setShowWinners] = useState(false);
  const [isShowing, setIsShowing] = useState(false);


  const toggleElement = () => {
    setIsShowing(true);
  };


  const handleCardClick = () => {
    setIsCardVisible(false);
    setIsSpinnerVisible(true);
  };

  const handleAnnounceImage = ()=>{
    setRevealPrize(false)
    setShowWinners(true)
    setIsShowing(true)
   
    

  }


  const winnersList =[{ url: "/winners/5th_1.gif", title: "beachdddff" },
  { url: "/winners/5th_2.gif", title: "beachhhhddee" },
  { url: "/winners/5th_3.gif", title: "beachhhhddeefg" },
  { url: "/winners/5th_4.gif", title: "beachhhhddeedd" }]

  return (
    <div className="grandpage">
         <div className="nav-buttons-container">
        <Link to={"/"} >
        <button className="home-button medium-home-button">Home</button>
        </Link>
        </div>
      <div className="grandPrize">
        <img src="/bayers/bg/fifth_bg_1.gif" className="grandprize-image" alt="" />
      </div>
      <div className="grandprize-down-portion">
         <img className="grand-down-image" src="/bayers/bg/fifth_bg_2.png" alt="" />
      <div className="items-container">
        {isCardVisible && (
          <div className="grand-page-card-container">
            <div className="card" onClick={handleCardClick}>
              <div className="card-image-container">
                <img src="/bayers/cards/5th.gif" className="card-image" alt="" />
              </div>
            </div>
          </div>
        )}
        {isSpinnerVisible && (
          <div>
            <Spinner
              isSpinnerVisible={isSpinnerVisible}
              setIsSpinnerVisible={setIsSpinnerVisible}
              revealPrize={revealPrize}
              setRevealPrize={setRevealPrize}
              setIsShowing={setIsShowing}
           
            />
          </div>
        )}
        {
            revealPrize && (
                <div className={`transition-element ${isShowing ? 'show' : ''}`} onClick={handleAnnounceImage}>
                    <img src="/images/third_step_image.gif" className="announce-prize-image" alt="grand-prize-announcement" />

                    </div>
            )
        }

        {/* {
            showWinners && (
                <div className={`transition-element ${isShowing ? 'show' : ''}`} >
                     <img src="grandprizeWinners.gif" className="grand-winners-image" alt="grand-prize-announcement" />
                </div>
            )

        } */}

{
            showWinners && (<SecondSliderContainer winnersList={winnersList}/>)
        }

      </div>
      </div>
    </div>
  );
}

export default FourthPrize

