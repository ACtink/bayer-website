import React, { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

function GrandPrize() {
  const [isCardVisible, setIsCardVisible] = useState(true);

  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
  const [revealPrize , setRevealPrize] = useState(false);
  const [showWinners , setShowWinners] = useState(false)

  const handleCardClick = () => {
    setIsCardVisible(false);
    setIsSpinnerVisible(true);
  };

  const handleAnnounceImage = ()=>{
    setRevealPrize(false)
    setShowWinners(true)

  }

  return (
    <>
      <div className="grandPrize">
        <img src="grandprize.gif" className="grandprize-image" alt="" />
      </div>
      <div className="items-container">
        {isCardVisible && (
          <div className="grand-page-card-container">
            <div className="card" onClick={handleCardClick}>
              <div className="card-image-container">
                <img src="1.gif" className="card-image" alt="" />
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
            />
          </div>
        )}
        {
            revealPrize && (
                <div onClick={handleAnnounceImage}>
                    <img src="announce-grand-prize.png" alt="grand-prize-announcement" />

                    </div>
            )
        }

        {
            showWinners && (
                <div>
                     <img src="grandprizewinners.png" alt="grand-prize-announcement" />
                </div>
            )

        }

      </div>
    </>
  );
}

export default GrandPrize;