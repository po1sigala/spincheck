import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
class Article extends Component {
    state = {
        numCards: this.props.numCards
    };
    linkToSite = event => {
        console.log(event.target);
    };
    render() {
        const toDisplay = [];
        let i = this.props.numCards;
        for (i; i > 0; i--) {
            toDisplay.push(this.props.articles[i]);
            console.log(
                ` looping through articles returning: ${this.props.articles[i]}`
            );
            console.log(this.props.articles[i]);
        }
        const carouselPages = toDisplay.map(source => {
            return (
                <Carousel.Item key={toDisplay.indexOf(source)}>
                    <h1>
                        <Badge variant="secondary">{source.source.name}</Badge>
                    </h1>
                    <img
                        className="d-block w-100"
                        src={source.urlToImage}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{source.title}</h3>
                        <p>
                            {source.author} reports: {source.description}
                        </p>
                        <Button
                            variant="link"
                            href={source.url}
                            target="_blank"
                        >
                            Read More{" "}
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            );
        });

        return (
            //will replace this card. i want article to return rows with sliding elements that are cards with each response from that source

            <Carousel>{carouselPages}</Carousel>
        );
    }
}

export default Article;
