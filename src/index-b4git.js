import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import StartRating from "./StarRating";

// function Test() {
// 	const [movieRating, setMovieRating] = useState(0);
// 	return (
// 		<div>
// 			<StartRating color="blue" maxRating={10} onSetRating={setMovieRating} />
// 			<p>This movie was rated {movieRating} stars</p>
// 		</div>
// 	);
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <StartRating
			maxRating={5}
			messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
		/> */}
		{/* <StartRating /> */}
		{/* <StartRating size={24} color="red" className="test" defaultRating={2} /> */}
		{/* <Test /> */}
		<App />
	</React.StrictMode>
);
