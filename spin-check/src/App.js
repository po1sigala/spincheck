import React, { Component } from "react";
import Nav from "./components/Nav";
import Article from "./components/Article";
import SearchBar from "./components/searchBar";
import SitesList from "./components/SiteList";
class App extends Component {
    render() {
        return (
            <div>
                <div className="row" id="navRow">
                    <Nav />
                </div>

                <div className="row" id="contentRow">
                    <div className="infocolumn col-md-6">
                        <div>
                            <SitesList />
                        </div>
                        <div>
                            <SearchBar />
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
