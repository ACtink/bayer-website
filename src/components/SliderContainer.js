import Slider from "./Slider";
const SliderContainer = (props) => {
  let slides={}
  const winnersToShow  = props.winnersList
  if(winnersToShow.length!==0){
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
  // const containerStyles = {
  //   // width: "500px",
  //   // height: "500px",
  //   marginTop:"30px",
  //   minWidth: "80vw",
  //   minHeight: "60vh"
    
   
  // };
  return (
   
    
      <div className="slider-container" >
        <Slider slides={slides} />
      </div>
   
  );
};

export default SliderContainer 