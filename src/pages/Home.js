import React, { Component } from "react";

import SearchBar from "../components/searchBar";

import Jumbotron from "../components/Jumbotron";
class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <Jumbotron
                        title="Spin Check"
                        subHead="See what all sides are saying"
                    />
                </div>
                <div className="row" id="contentRow">
                    <div className="infocolumn col-md-6">
                        <div>
                            <SearchBar />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;
