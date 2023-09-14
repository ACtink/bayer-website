import React from "react";
import { Link } from "react-router-dom";
import CarouselC from "./CarouselC";
import '../carousal.css'

function Home() {
  return (
    <>
    <div className="outer">
      <div className="home">
      <div className="nav-buttons-container">
        <Link to={"/"} >
        <button className="home-button medium-home-button">Home</button>
        </Link>
        </div>
        <img src="/bayers/bg/home_bg_1.gif" className="banner-image" alt="" />
      </div>
      {/* <div className="home-down-portion"> */}

      <div className="card-container">

      <img className="home-down-image" src="/bayers/bg/home_bg_2.png" alt="" />
      <Link to="/firstprize" className="button-link">
        <div className="card">
          <div className="card-image-container">
            <img src="/bayers/cards/1st.gif"  className="card-image" alt="" />
          </div>
          {/* <Link to="/grandprize" className="button-link"><button class="button">
            <span>Grand Prize</span>
          </button></Link>  */}
          
        </div></Link> 
        <Link to="/secondprize" className="button-link">
        <div className="card">
          <div className="card-image-container">
          <img src="/bayers/cards/2nd.gif" className="card-image" alt="" />
          </div>
          {/* <Link to="/1stPrize" className="button-link"><button class="button">
            <span>1st Prize</span>
          </button></Link> */}
        </div>
        </Link> 
        <Link to="/thirdprize" className="button-link">
        <div className="card">
          <div className="card-image-container">
          <img src="/bayers/cards/3rd.gif" className="card-image" alt="" />
          </div>
        
          {/* <Link to="/2ndPrize" className="button-link"><button class="button">
            <span>2nd Prize</span>
          </button></Link> */}
        </div>
        </Link>
        <Link to="/fourthprize" className="button-link">
        <div className="card">
          <div className="card-image-container">
          <img src="/bayers/cards/4th.gif" className=" card-image" alt="" />
          </div>
          {/* <Link to="/3rdPrize" className="button-link"><button class="button">
            <span>3rd Prize</span>
          </button></Link> */}
        </div>
        </Link>
        {/* <div className="inner-container"> */}
        <Link to="/fifthprize" className="button-link">
          <div className="card">
            <div className="card-image-container">
            <img src="/bayers/cards/5th.gif" className="card-image" alt="" />
            </div>
            {/* <Link to="/4thPrize" className="button-link"><button class="button">
              <span>4rth Prize</span>
            </button></Link> */}
          </div>
          </Link>
          <Link to="/sixthprize" className="button-link">
          <div className="card">
            <div className="card-image-container">
            <img src="/bayers/cards/6th.gif" className=" card-image" alt="" />
            </div>
            {/* <Link to="/5thPrize" className="button-link"><button class="button">
              <span>5th Prize</span>
            </button></Link> */}
          </div>
          </Link>
        {/* </div> */}
 
      </div>
      
      {/* </div> */}
      </div>
    </>
  );
}

export default Home;
