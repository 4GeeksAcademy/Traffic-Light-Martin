import React, { useState } from "react";

const Home = () => {
	const [ selectedColor, setSelectedColor ] = useState();
	return (
		<div className="holder bg-dark d-flex d-flex justify-content-center align-items-center mx-auto">
			<div className="row traffic-light text-center bg-dark d-flex justify-content-center align-items-center m-auto">
				<div
				 onClick={() => setSelectedColor("red")}
				 className=
				 {"light red" + (selectedColor === "red" ? "-on glow" : "")
				 }></div>
				<div
				 onClick={() => setSelectedColor("yellow")}
				 className=
				 {"light yellow" + (selectedColor === "yellow" ? "-on glow" : "")
				 }></div>
				<div
				 onClick={() => setSelectedColor("green")}
				 className=
				 {"light green" + (selectedColor === "green" ? "-on glow" : "")
				 }></div>
			</div>
		</div>
	);
};

export default Home;
