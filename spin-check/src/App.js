import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Search from "./pages/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
require("dotenv").config();

function App() {
    return (
        <Router>
            <div className="row" id="navRow">
                <Nav />
            </div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/trending" component={Trending} />
                <Route exact path="/Home" component={Home} />
                <Route exact path="/Search" component={Search} />
            </Switch>
        </Router>
    );
}

export default App;
