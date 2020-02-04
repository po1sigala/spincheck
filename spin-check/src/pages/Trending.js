import React, { Component } from "react";

import Article from "../components/Article";

import Jumbotron from "../components/Jumbotron";
import API from "../Utils/API";

class Trending extends Component {
    //default to returning 5 trending articles
    state = {
        numCards: 5,
        countries: ["us"],
        responses: []
    };
    componentDidMount = () => {
        const newState = [];
        this.state.countries.map(country => {
            API.TrendingHeadlines(country).then(res => {
                const results = res.data.articles;
                console.log("results are");
                console.log(results);
                newState.push(results);
                this.setState({ responses: newState });
            });
        });
        console.log(this.state.articles);
    };
    render() {
        const APIResponses = this.state.responses;
        console.log("responses are ");
        console.log(APIResponses);

        let i = 0;

        const carousels = APIResponses.map(setOfArticles => {
            i++;

            return (
                <Article
                    key={i}
                    articles={setOfArticles}
                    numCards={this.state.numCards}
                    id={this.state.countries[i]}
                    maximum={this.state.maximum}
                ></Article>
            );
        });
        return (
            <div>
                <div>
                    <Jumbotron
                        title="Trending now"
                        subHead="the world is buzzing on these topics"
                    />
                </div>
                <div className="row" id="contentRow">
                    <div className="infocolumn col-md-3 col-sm-3 col-lg-3">
                        TOP 5 USA
                    </div>
                    <div className="col-md-9 col-lg-9 col-sm-9">
                        {carousels}
                    </div>
                </div>
            </div>
        );
    }
}
export default Trending;
