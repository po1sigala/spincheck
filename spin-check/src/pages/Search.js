import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Article from "../components/Article";
import SearchBar from "../components/searchBar";
import SitesList from "../components/SiteList";
import Jumbotron from "../components/Jumbotron";
import API from "../Utils/API";
class Search extends Component {
    state = {
        inputText: "",
        sites: [],
        numCards: 1,

        responses: []
    };
    searchNews = event => {
        //need to clear my carosels
        const sitesToSearch = this.state.sites.length;
        const query = this.state.inputText;
        const newState = [];
        switch (sitesToSearch > 0) {
            case true:
                //run regular search with sites

                this.state.sites.map(siteKey => {
                    API.searchNews(query, siteKey).then(res => {
                        const results = { articles: res.data.articles };
                        newState.push(results);

                        this.setState({ responses: newState });
                    });
                });

                break;
            case false:
                //we need to search top headlines usa

                API.searchHeadline(query, "us").then(res => {
                    const headlines = [res.data];
                    this.setState({ responses: headlines });
                });
                break;
            default:
                console.log(
                    ` something is wrong with the sites array it is ${this.state.sites}`
                );
        }
    };
    handleInput = input => {
        this.setState({ inputText: input });
    };
    handleCheckbox = checkedArry => {
        console.log(`the sites checked is ${checkedArry}`);
        this.setState({ sites: checkedArry });
    };
    render() {
        const APIResponses = this.state.responses;

        let i = 0;
        const carousels = APIResponses.map(setOfArticles => {
            i++;
            console.log(`creating an article carosel with`);
            console.log(setOfArticles);

            return (
                <Article
                    key={i}
                    articles={setOfArticles.articles}
                    numCards={this.state.numCards}
                    id={this.state.sites[i - 1]}
                ></Article>
            );
        });

        return (
            <div>
                <div>
                    <Jumbotron
                        title="Spin Check"
                        subHead="Compare how your topic is being discussed across media"
                    />
                </div>
                <div className="row" id="contentRow">
                    <div className="infocolumn col-md-6">
                        <div>
                            <div className="col-md-6 col-sm-6 col-lg-6">
                                <SearchBar handleInput={this.handleInput} />
                            </div>
                            <div className="col-md-6 col-sm-6 col-lg-6">
                                <Button onClick={this.searchNews}>
                                    Search
                                </Button>
                            </div>
                        </div>
                        <div>
                            <SitesList
                                handleCheckbox={this.handleCheckbox}
                                //manually adding in sites but later can use map from a json of sites
                                sites={[
                                    ["ABC News", "abc-news"],
                                    ["Vice News", "vice-news"]
                                ]}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>{carousels}</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Search;
