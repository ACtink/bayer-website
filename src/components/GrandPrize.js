import React, { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

function GrandPrize() {
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

  return (
    <div className="grandpage">
       <div className="nav-buttons-container">
        <Link to={"/"} >
        <button className="home-button medium-home-button">Home</button>
        </Link>
        </div>
      <div className="grandPrize">
        <img src="/bayers/bg/first_bg_1.gif" className="grandprize-image" alt="" />
      </div>
      <div className="grandprize-down-portion">
         <img className="grand-down-image" src="/bayers/bg/first_bg_2.png" alt="" />
      <div className="items-container">
        {isCardVisible && (
          <div className="grand-page-card-container">
            <div className="card" onClick={handleCardClick}>
              <div className="card-image-container">
                <img src="/bayers/cards/1st.gif" className="card-image" alt="" />
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
                    <img src="/bayers/winners/winner_selected.gif" className="announce-prize-image" alt="grand-prize-announcement" />

                    </div>
            )
        }

        {
            showWinners && (
                <div className={` ${isShowing ? 'show' : ''}`} >
                     <img src="/bayers/winners/winners_list_posters.gif" className="grand-winners-image" alt="grand-prize-announcement" />
                </div>
            )

        }

      </div>
      </div>
    </div>
  );
}

export default GrandPrize;
