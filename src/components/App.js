import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Navbar from './Navbar.js';
import About from './About.js';
import Section1 from './Section1.js';
import Section2 from './Section2.js';
import Section3 from './Section3.js';
import Section4 from './Section4.js';
import Section5 from './Section5.js';
import Section6 from './Section6.js';
import Section7 from './Section7.js';
import Section8 from './Section8.js';


export default () => {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/toro">
						<Section7 />
					</Route>
					<Route path="/bon">
						<Section6 />
					</Route>
					<Route path="/respect">
						<Section8 />
					</Route>
					<Route path="/">
						<Navbar />
						<Section1 />
						<Section2 />
						<Section3 />
						<Section4 />
						<Section5 />
					</Route>
				</Switch>
			</Router>

		</div >
	);
};