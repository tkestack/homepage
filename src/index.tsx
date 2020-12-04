import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

import MultipleBusinessSupport from "./page/casestudy-multiple-business-support";
import CaseStudyPrivateCloud from "./page/casestudy-private-cloud";
import ScientificComputing from "./page/casestudy-scientific-computing";
import Home from "./page/home";

const App = () => {

	return (
		<HashRouter>
			<Switch>
				<Route path={"/home"} >
					<Home />
				</Route>
				<Route
					path={"/casestudy-multiple-business-support"}
				>
					<MultipleBusinessSupport />
				</Route>
				<Route
					path={"/casestudy-scientific-computing"}
				>
					<ScientificComputing />
				</Route>
				<Route path={"/casestudy-private-cloud"}>
					<CaseStudyPrivateCloud />
				</Route>
				<Route path={"/"}><Home /></Route>
				<Redirect to={"/home"} />
			</Switch>
		</HashRouter >
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
