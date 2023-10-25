import React, { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import SliderContainer from "./SliderContainer";
import SecondSliderContainer from "./SecondSliderContainer";
import Modal from "./Modal";

function FourthPrize() {
  const [isCardVisible, setIsCardVisible] = useState(true);

  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
  const [revealPrize, setRevealPrize] = useState(false);
  const [showWinners, setShowWinners] = useState(false);
  const [isShowing, setIsShowing] = useState(false);

  const toggleElement = () => {
    setIsShowing(true);
  };

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setRevealPrize(!revealPrize);
  };

  const handleCardClick = () => {
    setIsCardVisible(false);
    setIsSpinnerVisible(true);
  };

  const handleAnnounceImage = () => {
    setRevealPrize(false);
    setShowWinners(true);
    setIsShowing(true);
    setShowModal(!showModal);
  };

  const winnersList = [
    { url: "/bayers/winner_posters/5th_1.gif", title: "beach" },
    { url: "/bayers/winner_posters/5th_2.gif", title: "beach" },
    { url: "/bayers/winner_posters/5th_3.gif", title: "beach" },
    { url: "/bayers/winner_posters/5th_4.gif", title: "beach" },
    { url: "/bayers/winner_posters/5th_5.gif", title: "beach" },
  ];

  return (
    <div className="grandpage">
      <div className="nav-buttons-container">
        <Link to={"/"}>
          <button className="home-button medium-home-button">Home</button>
        </Link>
      </div>
      <div className="grandPrize">
        <img
          src="/bayers/bg/fifth_prize_1.gif"
          className="grandprize-image"
          alt=""
          loading="lazy"
        />
      </div>
      <div className="grandprize-down-portion">
        <img
          className="grand-down-image"
          src="/bayers/bg/fifth_prize_2.png"
          alt=""
          loading="lazy"
        />
        <div className="items-container">
          {isCardVisible && (
            <div className="grand-page-card-container">
              <div className="card" onClick={handleCardClick}>
                <div className="card-image-container">
                  <img
                    src="/bayers/cards/fifth_prize.gif"
                    className="card-image"
                    alt=""
                    loading="lazy"
                  />
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
          {revealPrize && (
            <div
              className={`transition-element ${isShowing ? "show" : ""}`}
              onClick={handleAnnounceImage}
            >
              <img
                src="/images/third_step_image.gif"
                className="announce-prize-image"
                alt="grand-prize-announcement"
                loading="lazy"
              />
            </div>
          )}

          {/* {
            showWinners && (
                <div className={`transition-element ${isShowing ? 'show' : ''}`} >
                     <img src="grandprizeWinners.gif" className="grand-winners-image" alt="grand-prize-announcement" />
                </div>
            )

        } */}

          {/* {
            showWinners && (<SecondSliderContainer winnersList={winnersList}/>)
        } */}
        </div>
      </div>
      {showWinners && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          toggleModal={toggleModal}
          winnersList={winnersList}
          revealPrize={revealPrize}
          setRevealPrize={setRevealPrize}
        />
      )}
    </div>
  );
}

export default FourthPrize;
