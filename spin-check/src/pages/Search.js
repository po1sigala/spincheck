import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Article from "../components/Article";
import SearchBar from "../components/searchBar";
import SitesList from "../components/SiteList";
import Jumbotron from "../components/Jumbotron";
import API from "../Utils/API";

class Search extends Component {
    state = {
        inputText: ""
    };
    searchNews = event => {
        const query = this.state.inputText;
        console.log(`searching news 
        \nSearching for ${this.state.inputText}
        \ngot back..
      `);
        API.searchNews(query).then(res => {
            console.log(res.data.articles);
        });
    };
    handleInput = input => {
        this.setState({ inputText: input });
    };
    render() {
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
export default Search;
