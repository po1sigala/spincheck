import axios from "axios";

export default {
    //hit trending news
    searchNewsURL: process.env.REACT_APP_NEWS_SEARCH_URL,
    NewsAPIKey: process.env.REACT_APP_NEWS_KEY,

    //serach a needs to know the query and the sites youre looking for
    searchNews: function(query, scope) {
        //REMOVE THIS LATER for testing only
        scope = "abc-news";
        //REMOVE ABOVE LATER
        return axios.get(
            `${this.searchNewsURL}/everything?q=${query}&sources=${scope}&${this.NewsAPIKey}`
        );
    }
};
