import axios from "axios";

export default {
    //hit trending news
    searchNewsURL: process.env.REACT_APP_NEWS_SEARCH_URL,
    NewsAPIKey: process.env.REACT_APP_NEWS_KEY,
    topHeadlines: process.env.REACT_APP_NEWS_TRENDING,

    //serach a needs to know the query and the sites youre looking for
    searchNews: function(query, scope) {
        return axios.get(
            `${this.searchNewsURL}/everything?q=${query}&sources=${scope}&${this.NewsAPIKey}`
        );
    },
    searchHeadline: function(query, scope) {
        return axios.get(
            `${this.searchNewsURL}/${this.topHeadlines}${scope}&q=${query}&${this.NewsAPIKey}`
        );
    },
    TrendingHeadlines: function(scope) {
        return axios.get(
            `${this.searchNewsURL}/${this.topHeadlines}${scope}&${this.NewsAPIKey}`
        );
    }
};
