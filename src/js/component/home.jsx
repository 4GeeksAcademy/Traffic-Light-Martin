import React, { useState, useEffect } from "react";

const Home = () => {
    const colors = ["red", "yellow", "green"];
	const [ selectedColor, setSelectedColor ] = useState(colors[colorIndex]);
	const [colorIndex, setColorIndex] = useState(0);
	const [shouldStartInterval, setShouldStartInterval] = useState(false);

	useEffect(() => {
	  if (shouldStartInterval) {
		const interval = setInterval(() => {
		  setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
		  setSelectedColor(colors[colorIndex]);
		}, 800);
  
		return () => {
		  clearInterval(interval);
		};
	  } else {
		setSelectedColor(""); // Set selectedColor to empty when shouldStartInterval is false
	  }
	}, [shouldStartInterval, colorIndex]);
  
	const goTraffic = () => {
		setShouldStartInterval((prevValue) => !prevValue);
	  };

	return (
		<div className="holder bg-dark d-flex d-flex justify-content-center align-items-center mx-auto">
			<div className="row traffic-light text-center bg-dark d-flex justify-content-center align-items-center m-auto">
				<div
				 onClick={() => setSelectedColor(colors[0])}
				 className=
				 {"light red" + (selectedColor === "red" ? "-on glow" : "")
				 }></div>
				<div
				 onClick={() => setSelectedColor(colors[1])}
				 className=
				 {"light yellow" + (selectedColor === "yellow" ? "-on glow" : "")
				 }></div>
				<div
				 onClick={() => setSelectedColor(colors[2])}
				 className=
				 {"light green" + (selectedColor === "green" ? "-on glow" : "")
				 }></div>
			  <div>
			    <button
				 type="button"
				 onClick={goTraffic} 
				 className=
				 {"btn btn-outline-secondary btn-lg" +
				 (selectedColor === "green" || selectedColor === "red" || selectedColor === "yellow" 
				  ?  " " + selectedColor + "-on theButton" : "")}>
					{shouldStartInterval ? "STOP" : "GO"}
				</button>
			  </div>
			  <div>
			 </div>
			</div>
		</div>
	);
};

export default Home;
