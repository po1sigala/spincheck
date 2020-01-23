import React, { Component } from "react";
import Nav from "./components/Nav";
import Article from "./components/Article";
import SearchBar from "./components/searchBar";
import SitesList from "./components/SiteList";
import Jumbotron from "./components/Jumbotron";
class App extends Component {
    render() {
        return (
            <div>
                <div className="row" id="navRow">
                    <Nav />
                </div>
                <div>
                    <Jumbotron />
                </div>
                <div className="row" id="contentRow">
                    <div className="infocolumn col-md-6">
                        <div>
                            <SearchBar />
                        </div>
                        <div>
                            <SitesList />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <Article> </Article>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
