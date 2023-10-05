import React, { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import Modal from "./Modal";

function GrandPrize() {
  const [isCardVisible, setIsCardVisible] = useState(true);

  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
  const [revealPrize, setRevealPrize] = useState(false);
  const [showWinners, setShowWinners] = useState(false);
  const [isShowing, setIsShowing] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setRevealPrize(!revealPrize);
  };

  const winnersList = [
    { url: "/winner_posters/first_prize/first_prize_1.gif", title: "beach" },
    { url: "/winner_posters/first_prize/first_prize_2.gif", title: "beach" },
    { url: "/winner_posters/first_prize/first_prize_3.gif", title: "beach" },
    { url: "/winner_posters/first_prize/first_prize_4.gif", title: "beach" },
    { url: "/winner_posters/first_prize/first_prize_5.gif", title: "beach" },
  ];

  const toggleElement = () => {
    setIsShowing(true);
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

  return (
    <div className="grandpage">
      <div className="nav-buttons-container">
        <Link to={"/"}>
          <button className="home-button medium-home-button">Home</button>
        </Link>
      </div>
      <div className="grandPrize">
        <img
          src="/bayers/bg/first_prize_1.gif"
          className="grandprize-image"
          alt=""
          loading="lazy"
        />
      </div>
      <div className="grandprize-down-portion">
        <img
          className="grand-down-image"
          src="/bayers/bg/first_prize_2.png"
          alt=""
          loading="lazy"
        />
        <div className="items-container">
          {isCardVisible && (
            <div className="grand-page-card-container">
              <div className="card" onClick={handleCardClick}>
                <div className="card-image-container">
                  <img
                    src="/bayers/cards/first_prize.gif"
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
        </div>
      </div>
      {showWinners && (
        // <div className={` overlay ${isShowing ? "show" : ""}`}>
        //   <img
        //     src="/winners/1st.gif"
        //     className="grand-winners-image"
        //     alt="grand-prize-announcement"
        //   />
        // </div>
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

export default GrandPrize;
