import SecondSlider from "./SecondSlider";
import Slider from "./Slider";
const SecondSliderContainer = (props) => {
  let slides={}
  const winnersToShow  = props.winnersList
  console.log(winnersToShow)
  if(winnersToShow){
     slides = [
      // { url: "requirements/winners/first-winner-names-1.gif", title: "beach" },
      // { url: "requirements/winners/first-winner-names-2.gif", title: "boat" },
      ...winnersToShow
      // { url: "http://localhost:3000/image-3.jpg", title: "forest" },
      // { url: "http://localhost:3000/image-4.jpg", title: "city" },
      // { url: "http://localhost:3000/image-5.jpg", title: "italy" },
    ];
  }
    else{
       slides = [
        { url: "requirements/winners/first-winner-names-1.gif", title: "beach" },
        { url: "requirements/winners/first-winner-names-2.gif", title: "boat" },
        
        // { url: "http://localhost:3000/image-3.jpg", title: "forest" },
        // { url: "http://localhost:3000/image-4.jpg", title: "city" },
        // { url: "http://localhost:3000/image-5.jpg", title: "italy" },
      ];
      
    }

  
 
  const containerStyles = {
    width: "570px",
    height: "350px",
    margin: "63px auto"
  };
  return (
    <div>
    
      <div style={containerStyles}>
        <SecondSlider slides={slides} />
      </div>
    </div>
  );
};

export default SecondSliderContainer 