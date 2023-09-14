import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import GrandPrize from "./components/GrandPrize";
import YetToImplement from "./components/YetToImplement";
import FirstPrize from "./components/FirstPrize";
import SecondPrize from "./components/SecondPrize";
import ThirdPrize from "./components/ThirdPrize";
import FourthPrize from "./components/FourthPrize";
import FifthPrize from "./components/FifthPrize";
import CarouselC from "./components/CarouselC";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route path="/" element={<Home />} />
          <Route path="/firstprize" element={<GrandPrize />} />
          <Route path="/secondprize" element={<FirstPrize/>}/>
          <Route path="/thirdprize" element={<SecondPrize/>}/>
          <Route path="/fourthprize" element={<ThirdPrize/>}/>
          <Route path="/fifthprize" element={<FourthPrize/>}/>
          <Route path="/sixthprize" element={<FifthPrize/>}/>
          <Route  path="cara" element={<CarouselC/>} />
          <Route path="/*" element={<YetToImplement/>}/>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
